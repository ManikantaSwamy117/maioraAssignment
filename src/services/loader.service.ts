import  { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLogin: any = localStorage.getItem("isLogin") || "no";

  showSpinner: boolean = false;

  currentPage: any = localStorage.getItem("currentPage") || "";

  footerNavigationPage: any = localStorage.getItem('footerNavigationPage') || "";

  userID: any = localStorage.getItem("userID") || "";

  userEmail: any = localStorage.getItem("userEmail") || "";

  ceologin: any = localStorage.getItem('CEOLogin') || '';

  employeetype: any = localStorage.getItem('employeetype') || '';

  employeeID: any = localStorage.getItem('employeeID') || '';

  menu: any = localStorage.getItem('menu') || 'Dashboard';

  menuID: any = localStorage.getItem('menuID') || '1';

  gender: any = localStorage.getItem('gender') || '';

  hiredDate: any = localStorage.getItem('hiredDate') || '';

  useremail: any = localStorage.getItem('email') || '';

  departmentID: any =
    localStorage.getItem('departmentID') || '';

  userLevel: any = localStorage.getItem("userLevel") || "";  

  managerID: any = localStorage.getItem("managerID") || "";

  StaffID: any = localStorage.getItem("StaffID") || "";

  emailID: any = localStorage.getItem("emailID") || "";

  DepartmentID: any = localStorage.getItem("emailID") || "";

  loginType: any = localStorage.getItem("loginType") || "";

  roleID: any = localStorage.getItem('roleID') || '';

  loginID: any = localStorage.getItem('loginID') || '';

  routervalue: any = localStorage.getItem("routervalue") || "";

  designationName: any = localStorage.getItem("DesignationName") || "";

  userphoto: any = localStorage.getItem("userphoto") || "";

  EditStaffID: any = localStorage.getItem('EditStaffID') || '';

  OuputedStaffID: any = localStorage.getItem('OuputedStaffID') || '';

  dateofbirth: any = localStorage.getItem('dateofbirth') || '';

  CompanyID: any = localStorage.getItem('CompanyID') || '';

  DateOfJoining: any = localStorage.getItem('DateOfJoining') || '';

  otattachments: any;

  username: any = localStorage.getItem('username') || '';

  modalStatus: boolean = false;

  deviceInfo: any;
  public deviceOs: any;
  constructor(private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.deviceOs = this.deviceInfo.os;
    console.log("os",this.deviceOs)
    //this.getCoOrds();
  }
}

