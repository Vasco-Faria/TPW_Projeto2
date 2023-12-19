// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;
  private isAuthenticated = false;
  private apiUrl = 'http://localhost:8000/'; // Update with your Django API URL

  constructor(private http: HttpClient) {
    this.checkAuthentication();
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}rest-auth/login/`;
    if (url) {
      this.getUserInfo(username).subscribe(
        (userInfo) => {
          console.log('User Info:', userInfo);
        },
        (error) => {
          console.error('Error getting user info:', error);
        }
      );
        
    }
    return this.http.post(url, { username, password });
  }

  register(username: string, email: string, password1: string, password2: string): Observable<any> {
    const url = `${this.apiUrl}rest-auth/registration/`;
    return this.http.post(url, { username, email, password1, password2 });
  }

  logout() {
    localStorage.removeItem('key');
  }

  getUserInfo(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}user_info/${username}/`);
  }

  checkAuthentication() {
    const key = localStorage.getItem('key');
    this.isAuthenticated = !!key;
      }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }


}