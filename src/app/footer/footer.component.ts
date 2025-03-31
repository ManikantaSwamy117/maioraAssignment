import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(public loaderService: LoaderService, public apiService: ApiService, public router: Router) { }

  async ngOnInit() {

  }

  navigate(url: any, page: any) {
    
    this.loaderService.currentPage = page;
    localStorage.setItem('currentPage', page);
    this.router.navigate([`${url}`]);
    
  }
}
