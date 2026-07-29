import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 1. Importa il Router
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: ''
  };
  
  messaggio: string | null = null;
  isErrore: boolean = false;

  // 2. Inietta il Router nel costruttore
  constructor(private authService: AuthService, private router: Router) {}

  registrati() {
    if (!this.registerData.email.includes('@')) {
      this.mostraMessaggio("Inserisci un indirizzo email valido", true);
      return;
    }

    this.authService.register(this.registerData).subscribe({
      next: (res: any) => {
        // 3. Reindirizza direttamente alla pagina di login
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        // Mostra un errore specifico se fornito dal backend (es. "Utente già esistente")
        const msgErrore = err.error?.message || "Errore di registrazione. L'email potrebbe essere già in uso.";
        this.mostraMessaggio(msgErrore, true);
      }
    });
  }

  private mostraMessaggio(testo: string, errore: boolean) {
    this.messaggio = testo;
    this.isErrore = errore;
    setTimeout(() => this.messaggio = null, 4000);
  }
}