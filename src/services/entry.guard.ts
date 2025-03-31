import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
@Injectable()
export class EntryGuard   {
  constructor(public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("jorjgfl",localStorage.getItem('isLogin'))
    if (localStorage.getItem('isLogin') && localStorage.getItem('isLogin') == 'yes') {
      this.router.navigate(['/Dashboard'], { replaceUrl: true });
      return false;
    }
    else {
      return true;
    }
  }

}
