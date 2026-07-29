import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  // Stato dell'utente salvato in memoria e sincronizzato con localStorage (solo info profilo, NON il token)
  private currentUser = signal<any>(JSON.parse(localStorage.getItem('utente') || 'null'));

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true });
  }

  // Salva le informazioni profilo ricevute dal login (es. email, ruolo)
  salvaUtente(res: any): void {
    localStorage.setItem('utente', JSON.stringify(res));
    this.currentUser.set(res);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('utente');
        this.currentUser.set(null);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  getUserName(): string {
    const user = this.currentUser();
    return user ? (user.email || user.username || '') : '';
  }

  isAdmin(): boolean {
    const user = this.currentUser();
    return user ? (user.ruolo === 'ADMIN' || user.role === 'ADMIN') : false;
  }


  changePassword(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/change-password`, data, { withCredentials: true });
  }
}