import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';

const AUTH_API = 'http://localhost:8955/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean = false;

  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    return this.http.post(AUTH_API + 'token', credentials);
  }

  loginuser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  login(credentials: any): Observable<any> {
    this.isLogin = true;
    return this.http.post(AUTH_API + 'token', credentials);
  }

  logout() {
    localStorage.removeItem("token");
    this.isLogin = false;
    return true;
  }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}