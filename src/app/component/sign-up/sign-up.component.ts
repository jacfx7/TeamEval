import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@service/auth.service';
import { ConfirmedValidator } from '@common/confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  minPw = 8;
  formGroup: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      confirm_password: ['', [Validators.required]]
    }, { validator: ConfirmedValidator('password', 'confirm_password') });
  }

  ngOnInit(): void { }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get confirm_password() {
    return this.formGroup.get('confirm_password');
  }
}
