import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token;
  constructor(private auth: AuthService) {
    this.auth.activeUserToken.subscribe(res => this.token = res);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
     let req = request.clone({setHeaders: {'Authorization': `Token ${this.token}`, 'content-type': 'application/Json'}});
     return next.handle(req);
    }
    return next.handle(request);
  }
}
