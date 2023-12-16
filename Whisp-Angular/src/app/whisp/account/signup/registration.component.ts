// registration.component.ts

import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-registration',
  template: `
    <form (ngSubmit)="register()">
      <label for="username">Username:</label>
      <input type="text" id="username" [(ngModel)]="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" [(ngModel)]="email" required>

      <label for="password1">Password:</label>
      <input type="password" id="password1" [(ngModel)]="password1" required>

      <label for="password2">Confirm Password:</label>
      <input type="password" id="password2" [(ngModel)]="password2" required>

      <button type="submit">Register</button>
    </form>
  `,
})
export class RegistrationComponent {
  username: string;
  email: string;
  password1: string;
  password2: string;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.email, this.password1, this.password2).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful', response);
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed', error);
      }
    );
  }
}
