import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import Swal from 'sweetalert2';
import { App as CapacitorApp } from '@capacitor/app';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() toggleSide = new EventEmitter();
  constructor() { }

  ngOnInit() {
  
  }

  toggle() {
    this.toggleSide.emit();
  }

  logout() {
    Swal.fire({
      title: 'Are you sure want to logout?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.toggleSide.emit();
      }
    });
  }


}
