import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Cambiato da Observable<any> a void
  salvaUtente(utente: any): void {
    localStorage.setItem('utente', JSON.stringify(utente));
  }

  logout(): void {
    localStorage.removeItem('utente');
  }
}