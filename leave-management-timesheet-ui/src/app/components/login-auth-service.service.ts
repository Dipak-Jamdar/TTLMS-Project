import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthServiceService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3001/auth/login', credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
