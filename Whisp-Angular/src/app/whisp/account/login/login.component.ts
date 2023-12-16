// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <label for="username">Username:</label>
      <input type="text" id="username" [(ngModel)]="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" [(ngModel)]="password" required>

      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  username: string;
  password: string;

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

