// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../..//services/auth.service';
import { LoginModule } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (response) => {
        console.log('Login successful', response);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
