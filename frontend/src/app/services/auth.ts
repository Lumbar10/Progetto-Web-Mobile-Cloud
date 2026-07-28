import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Sostituisci con l'URL del tuo backend Spring Boot

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(user => {
        // Estrae la password ed elimina il campo dall'oggetto salvato nel browser
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  salvaUtente(utente: any): void {
    const { password, ...userClean } = utente;
    localStorage.setItem('user', JSON.stringify(userClean));
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

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.ruolo === 'ADMIN';
  }

}