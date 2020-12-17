import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';
import { LoginproviderimplementationService } from './loginproviderimplementation.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public activeUserToken = new BehaviorSubject(null);
  public activeUserInfo = new BehaviorSubject(null);
  public activeRole = new BehaviorSubject(null);
  public subscribedCourses$ = new BehaviorSubject(null);
  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) public platformId,
              private socialAuth: LoginproviderimplementationService,
              private router: Router) {
                this.socialAuth.google('607215262273-eglofaru4srkbfir19uu0ttapmvvu9jb.apps.googleusercontent.com');
                this.socialAuth.facebook('239054310469576', 'v2.4');
                this.getActiveUser();
              }

  getActiveUser() {
   if (isPlatformBrowser(this.platformId)) {
     this.activeUserToken.next(window.localStorage.getItem('activeUserToken'));
     this.activeRole.next(window.localStorage.getItem('activeRole'));
     this.activeUserInfo.next(JSON.parse(window.localStorage.getItem('activeUserInfo')));
     this.subscribedCourses$.next(JSON.parse(window.localStorage.getItem('subscribedCourses')));
   }
  }

  loginUser(userDetails) {
    return this.http.post<Config>(`${environment.api}api-token-auth/`, userDetails, {
      withCredentials: true
    });
  }

  register(registeUserData) {
    return this.http.post<Config>(`${environment.api}register_serializer/`, registeUserData);
  }

  getActiveCourses() {
    return this.http.get<Config>(`${environment.api}Registered_courses_generator`);
  }

  updateActiveUserInfo(data) {
    if (isPlatformBrowser(this.platformId)) {
      this.activeUserInfo.next(data);
    }
  }

  updateToken(token) {
    if (isPlatformBrowser(this.platformId)) {
      this.activeUserToken.next(token);
      localStorage.setItem('activeUserToken', token);
    }
  }

  setActiveRole(role) {
    if (isPlatformBrowser(this.platformId)) {
      this.activeRole.next(role);
      localStorage.setItem('activeRole', role);
    }
  }

  setSubscribedCourses(courses) {
    if (isPlatformBrowser(this.platformId)) {
      this.subscribedCourses$.next(courses);
      localStorage.setItem('subscribedCourses', JSON.stringify(courses));
    }
  }

  setActiveUserInfo(info) {
    if (isPlatformBrowser(this.platformId)) {
      this.activeUserInfo.next(info);
      localStorage.setItem('activeUserInfo', JSON.stringify(info));
    }
  }
  googleLogin() {
    this.socialAuth.loginWithProvider('google').subscribe(res => {
      console.log(res);
      this.http.post(`${environment.api}socialtoken/`, { data: res }, {
        withCredentials: true
      }).subscribe(ires => {
        console.log(ires);
      });
    });
  }

  facebookLogin() {
    this.socialAuth.loginWithProvider('facebook').subscribe(res => {
      console.log(res);
    });
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.clear();
      this.activeUserToken.next('');
      this.activeRole.next('');
      this.activeUserInfo.next('');
      this.router.navigate(['']);
      this.http.get(`${environment.api}logout/`, { withCredentials: true}).subscribe();
    }
  }
}
