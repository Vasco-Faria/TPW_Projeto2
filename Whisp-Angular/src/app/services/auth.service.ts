// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Update with your Django API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}rest-auth/login/`;
    return this.http.post(url, { username, password });
  }

  register(username: string, email: string, password1: string, password2: string): Observable<any> {
    const url = `${this.apiUrl}rest-auth/registration/`;
    return this.http.post(url, { username, email, password1, password2 });
  }

  //adicionar reset password maybe
}
