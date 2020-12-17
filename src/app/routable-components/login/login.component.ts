import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error;
  constructor(public auth: AuthService,
              public formErrors: ErrorMessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.loginUser(this.loginForm.value).subscribe(res => {
       if (res && res.token) {
         this.auth.updateToken(res.token);
         this.auth.getActiveCourses().subscribe(res => {
          this.auth.setActiveRole(res.is_staff);
          this.auth.setActiveUserInfo(res);
          this.auth.setSubscribedCourses(res.reg_courses);
          if (res.is_staff === 'Student') {
            if (res.reg_courses.length > 0) {
              this.router.navigate(['/user/group-dashboard']);
            } else {

            }
          } else if (res.is_staff === 'Mentor') {
            this.router.navigate(['/mentor']);
          } else if (res.is_staff === 'Admin') {
            this.router.navigate(['/admin']);
          }
         });
       }
      },
      error => {
        let err = error.error;
        if (err && err.non_field_errors && err.non_field_errors.length > 0) {
          this.error = error.error.non_field_errors[0];
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
