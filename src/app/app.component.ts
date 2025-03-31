import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';

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
