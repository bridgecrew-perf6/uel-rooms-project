import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  token;
  role;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.activeUserToken.subscribe(res => this.token = res);
    this.auth.activeRole.subscribe(res => this.role = res);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.token && this.role) {
         if (this.role === 'Student') {
           this.router.navigate(['/user/group-dashboard']);
         }
      } else {
        return true;
      }
  }
  
}
