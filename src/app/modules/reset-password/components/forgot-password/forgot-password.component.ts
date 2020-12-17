import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResetPasswordService } from '../../services/reset-password.service';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';
import { matchOtherValidator } from 'src/app/custom-form-validations/validationfunctions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  activeLink: string = 'reset-password';
  resetPasswordForm: FormGroup;
  error;
  success;
  constructor(private route: ActivatedRoute, private resetPassword: ResetPasswordService,
              private router: Router, public formErrors: ErrorMessagesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.activeLink = params['activelink'];
      switch (params['activelink']) {
        case 'reset-password':
          this.createResetPasswordForm();
          break;
        case 'update-password':
          this.resetPasswordForm = new FormGroup({
             passcode: new FormControl('', [Validators.required]),
             password: new FormControl('', [Validators.required]),
             confirmpassword: new FormControl('', [Validators.required, matchOtherValidator('password')]),
          });
          break;
        default:
          this.createResetPasswordForm();
          break;
      }
    });
  }

  createResetPasswordForm() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submitForm() {
    if (this.resetPasswordForm.valid) {
      switch (this.activeLink) {
        case 'reset-password':
          this.resetPassword.resetPassword(this.resetPasswordForm.value).subscribe(res => {
            console.log(res);
            if (res && res.context === 'success') {
              this.success = 'We have a verification code to your email. place type the code here to reset the password';
              this.router.navigate(['/forgot-password/update-password'], {queryParams: {email: this.resetPasswordForm.value.email}})
            }
          },
          error => {
            if (error && error.error && error.error.context) {
              this.error = error.error.msg;
            }
          });
          break;
        case 'update-password':
          this.resetPassword.updatePassword(this.resetPasswordForm.value).subscribe(res => {
            if (res && res.status) {
              this.success = 'Password updated suceesfully. you can now login.';
            }
          },
          error => {
            if (error && error.error && error.error.status) {
              this.error = error.error.status;
            }
          });
          break;
      }
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

}
