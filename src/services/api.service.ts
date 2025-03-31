import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
import { LoaderService } from './loader.service';
import { DatePipe } from '@angular/common';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  hostURL: string;
  hostURL2: any;

  constructor(public loaderService: LoaderService, public datePipe: DatePipe) {
    this.hostURL = environment.host;
    this.hostURL2 = 'https://103.12.1.103/OrdermofirebasenotificationAPI/' ;

  }

  public async commonPostCall(endPoint: string, data: any) {
    return await axios.post(this.hostURL + endPoint, data);
  }
  public async commonNotiGetCall(endPoint: string) {
    return await axios.get(this.hostURL2 + `${endPoint}}`);
  }



  public async commonGetCall(endPoint: string) {
    if (endPoint.includes('?')) {
      return await axios.get(this.hostURL + `${endPoint}&CompanyID=${localStorage.getItem('CompanyID')}`);
    }
    else {
      return await axios.get(this.hostURL + `${endPoint}?CompanyID=${localStorage.getItem('CompanyID')}`);
    }
  }

  public async getWithoutcompanyCall(endPoint: string) {
    return await axios.get(this.hostURL + endPoint);
  }
  calculateHoursDifference(startTime: string, endTime: string): number {
    const startDate = new Date(`1970-01-01T${startTime}`);
    const endDate = new Date(`1970-01-01T${endTime}`);
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }
    const timeDifference = endDate.getTime() - startDate.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    return hoursDifference;
  }

  omit_char(event: KeyboardEvent): void {
    const isNumberKey = event.key >= '0' && event.key <= '9';
    if (!isNumberKey) {
      event.preventDefault();
    }
  }
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'MM-dd-yyyy') || '';
  }
  getStartOfYear(): string {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1); // Month is 0-based (0 for January)
    return this.formatDate(startOfYear);
  }

  // Example method to get end of the year
  getEndOfYear(): string {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31); // Month is 0-based (11 for December)
    return this.formatDate(endOfYear);
  }

  encryptinput(input: any) {
    let cipherPhrase = `${btoa(environment.key1)}|${btoa(environment.key2)}`;
    let plainText = input;
    var key = CryptoJS.enc.Utf8.parse(cipherPhrase.split('|')[0]);
    var iv = CryptoJS.enc.Utf8.parse(cipherPhrase.split('|')[1]);
    var encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(plainText),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    );
    return encrypted.toString();
  }

  async pushnotification(data: any) {
    
    data.forEach(async (element: any) => {
      await axios.post(this.hostURL2 + `Firebase/sendMessage`, element).then(
        (res) => {
        },
        (error) => {
          console.error(error);
        },
      );
    });
 
 
  }


}
