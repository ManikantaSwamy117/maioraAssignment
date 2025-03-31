
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSide = new EventEmitter();
  notificationCount: any;

  constructor(public loaderService: LoaderService, ) { }

  async ngOnInit() {
   
  }

  async toggle() {
    this.toggleSide.emit();
  }

 


}
