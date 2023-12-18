// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  template: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  submitForm() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }
}

