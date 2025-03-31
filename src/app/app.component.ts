import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';
import Swal from 'sweetalert2';
import { App as CapacitorApp } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import { FireBasedNotificationsService } from 'src/services/fire-based-notifications.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Maiora';
  sidebar: boolean = false;

  constructor(
    public loaderService: LoaderService) {
  }

  ngOnInit() {
  
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}
