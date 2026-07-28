import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res: any) => {
        this.errorMessage = null;
        this.authService.salvaUtente(res);
        this.router.navigate(['/prodotti']);
      },
      error: (err: any) => {
        this.errorMessage = 'Credenziali non valide!';
      },
    });
  }
}