import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        this.errorMessage = null;
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Errore inviato dal Backend:', err);
        // Estrae la causa esatta restituita dal controller
        this.errorMessage = err.error?.message || err.error || 'Errore durante la registrazione!';
      }
    });
  }
}