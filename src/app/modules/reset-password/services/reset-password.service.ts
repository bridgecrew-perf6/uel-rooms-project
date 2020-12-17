import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  resetPassword(emailData) {
    return this.http.post<Config>(`${environment.api}forget_password`, emailData);
  }

  updatePassword(passwordData) {
    return this.http.post<Config>(`${environment.api}passcode_validation`, passwordData);
  }
}
