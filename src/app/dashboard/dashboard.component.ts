import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  sidebar: boolean = false;
  search: any;
  constructor(
    public loaderService: LoaderService,
    private router: Router) { }
  async ngOnInit() {

  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
  navigateToProduct() {
    this.router.navigate(['/Products']);
  }
}
