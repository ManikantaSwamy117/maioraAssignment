import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
export const FCM_TOKEN = 'Push_notification_token';


@Injectable({
  providedIn: 'root'
})
export class FireBasedNotificationsService {

  token: any;
  private _redirect = new BehaviorSubject<any>(null);
  get redirect() {
    return this._redirect.asObservable();
  }

  constructor(private storage: StorageService,private toastController: ToastController, public router: Router) {}
  initPush() {
    console.log('device',Capacitor.getPlatform());
    if (Capacitor.getPlatform() !== 'web') {
      console.log('Not a web');
      this.registerPush();
    }
  }

  private async registerPush() {
    try {
      await this.addListeners()
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        throw new Error('User denied permissions!');
      }

      this.token = await PushNotifications.register();
      console.log('Token',  this.token);

    }
    catch (e) {

    }
  }

  async addListeners() {
    await PushNotifications.addListener('registration', async (token: Token) => {
      this.token = token.value;
      localStorage.setItem('FcmToken',this.token)
      console.log('Registration event fired');
      console.log('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', async notification => {
      console.log('Push notification received: ', JSON.stringify(notification));
      await this.handleNotificationPayload(notification);
    });


    await PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);     
      this.router.navigate(['/notifications']);
    });
  }
  getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }
  async handleNotificationPayload(notification: PushNotificationSchema) {
    const toast = await this.toastController.create({
      message: notification.data.title || 'New notification', 
      duration: 5000,
    });
    await toast.present();
  }
}

