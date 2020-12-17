import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';
import { matchOtherValidator } from 'src/app/custom-form-validations/validationfunctions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  success;
  error;
  disable: Boolean = false;
  constructor(private auth: AuthService,
              public formErrors: ErrorMessagesService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      // conformpassword: new FormControl('', [Validators.required, matchOtherValidator('password')])
    });
  }

  registerUser() {
    if (this.registrationForm.valid) {
       this.success = null;
       this.error = null;
       this.disable = true;
       this.auth.register(this.registrationForm.value).subscribe(res => {
        this.success = res.message;
       },
       error => {
         this.error = error.error.message;
         this.disable = false;
       },
       () => {
         this.disable = false;
       });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}
