import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated = false;
  private backendApi = 'http://localhost:8888'
  

  constructor(private router: Router, private httpClient:HttpClient) { }

  authenticate(username: string, password: string): Observable<any>{
    return this.httpClient.post(
      this.backendApi+'/auth/login',
      {
        email: username,
        password: password
      },
    )
  }

  login(username: string, password: string): boolean {
    // Replace this with real authentication logic
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token')
    return token != null && token != ""
  }

  register(userData: { fullName: string; telephone: string; cne: string; email: string; password: string }): Observable<any> {
    return this.httpClient.post(this.backendApi+"/residents/register", userData);
  }
}
