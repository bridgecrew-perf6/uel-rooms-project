import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  token;
  role;
  constructor(private auth: AuthService, private router: Router, private common: CommonService) {
    this.auth.activeUserToken.subscribe(res => this.token = res);
    this.auth.activeRole.subscribe(res => this.role = res);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (this.common.isBrowser()) {
      if (this.token && this.role === 'Student') {
        return true;
      } else {
        this.router.navigate(['/login'], {queryParams: { link: next.url}});
      }
     } else {
       this.router.navigate(['/loading']);
     }
  }
  
}
