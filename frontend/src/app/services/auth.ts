import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Sostituisci con l'URL del tuo backend Spring Boot

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  salvaUtente(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserName(): string | null {
    const user = localStorage.getItem('user');
    if (!user) return null;
    const parsedUser = JSON.parse(user);
    return parsedUser.username || parsedUser.email;
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}