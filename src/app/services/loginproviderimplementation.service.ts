import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

declare let gapi: any;
declare let FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginproviderimplementationService {

  gauth: any;
  public activeUserDetails = new BehaviorSubject(null);
  constructor(@Inject(PLATFORM_ID) private platformId) { }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  google(clienId) {
    if (this.isBrowser()) {
      let d = document, gJs, ref: any = d.getElementsByTagName('script')[0];
      gJs = d.createElement('script');
      gJs.async = true;
      gJs.src = "//apis.google.com/js/platform.js";
  
      gJs.onload = function() {
          gapi.load('auth2', function() {
              gapi.auth2.init({
              client_id: clienId,
              scope: 'email'
              })
          })
      }
      ref.parentNode.insertBefore(gJs, ref);
    }
  }

  facebook(clientID, apiVersion) {
    if (this.isBrowser()) {
      let d = document, fbJs, id = 'facebook-jssdk', ref: any = d.getElementsByTagName('script')[0];
      fbJs = d.createElement('script');
      fbJs.id = id;
      fbJs.async = true;
      fbJs.src = "//connect.facebook.net/en_US/sdk.js";
  
      fbJs.onload = function() {
          FB.init({
              appId: clientID,
              status: true,
              cookie: true,
              xfbml: true,
              version: apiVersion
          });
      };
  
      ref.parentNode.insertBefore(fbJs, ref);
    }
  }

  loginWithProvider(option): Observable<Object> {
   return Observable.create(
     (observer: Observer<Object>) => {
       switch (option) {
         case 'google':
          if (typeof(this.gauth) == "undefined"){
            this.gauth = gapi.auth2.getAuthInstance();
          }
          if (!this.gauth.isSignedIn.get()){
              this.gauth.signIn().then(() => {
                  localStorage.setItem('_login_provider', 'google');
                  observer.next(this._fetchGoogleUserDetails());
                  observer.complete();
              });
          } else {
              localStorage.setItem('_login_provider', 'google');
              observer.next(this._fetchGoogleUserDetails());
              observer.complete();
          }
            
         break;
         case 'facebook':
          FB.getLoginStatus((response: any) => {
            if (response.status === "connected") {
                FB.api('/me?fields=name,email,picture', (res: any) => {
                    if (!res || res.error) {
                        observer.error(res.error);
                    } else {
                        let userDetails = {
                            name: res.name, 
                            email: res.email, 
                            uid: res.id, 
                            provider: "facebook", 
                            image: res.picture.data.url,
                            token: response.authResponse.accessToken
                        }
                        localStorage.setItem('_login_provider', 'facebook');
                        observer.next(userDetails);
                        observer.complete();
                    }
                });
            }
            else{
                FB.login((response: any) => {
                    if (response.status === "connected") {
                        FB.api('/me?fields=name,email,picture', (res: any) => {
                            if (!res || res.error) {
                                observer.error(res.error);
                            } else {
                                let userDetails = {
                                    name: res.name, 
                                    email: res.email, 
                                    uid: res.id, 
                                    provider: "facebook", 
                                    image: res.picture.data.url,
                                    token: response.authResponse.accessToken
                                }
                                localStorage.setItem('_login_provider', 'facebook');
                                observer.next(userDetails);
                                observer.complete();
                            }
                        });
                    }
                }, {scope: 'email', auth_type: "rerequest"});
            }
        });
           break;
       }
     }
   );
  }

  private _fetchGoogleUserDetails() {
    let currentUser = this.gauth.currentUser.get();
    let profile = currentUser.getBasicProfile();
    let idToken = currentUser.getAuthResponse().id_token;
    let accessToken = currentUser.getAuthResponse().access_token;
    return {
        token: accessToken,
        idToken: idToken,
        uid: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        image: profile.getImageUrl(),
        provider: "google"
    };
  }

}
