import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private authService: Auth, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        this.errorMessage = null;
        this.authService.salvaUtente(res);
        this.router.navigate(['/prodotti']);
      },
      error: (err) => {
        this.errorMessage = 'Credenziali non valide!';
      },
    });
  }
}