import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profilo.html'
})
export class ProfiloComponent {
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  
  messaggio: string | null = null;
  isErrore: boolean = false;

  constructor(public authService: AuthService) {}

  cambiaPassword() {
    // 1. Controllo campi vuoti
    if (!this.passwordData.oldPassword || !this.passwordData.newPassword || !this.passwordData.confirmPassword) {
      this.mostraMessaggio('Compila tutti i campi', true);
      return;
    }

    // 2. Controllo password coincidenti
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.mostraMessaggio('Le nuove password non coincidono', true);
      return;
    }

    // 3. Preparazione del payload (il backend non ha bisogno di confirmPassword)
    const payload = {
      oldPassword: this.passwordData.oldPassword,
      newPassword: this.passwordData.newPassword
    };

    // 4. Chiamata al backend
    this.authService.changePassword(payload).subscribe({
      next: (res: any) => {
        // Usa una stringa fissa di sicurezza nel caso in cui res.message sia vuoto
        const msgSuccesso = res?.message || 'Password aggiornata con successo!';
        this.mostraMessaggio(msgSuccesso, false);
        this.passwordData = { oldPassword: '', newPassword: '', confirmPassword: '' };
      },
      error: (err: any) => {
        const msgErrore = err.error?.message || 'Errore durante l\'aggiornamento';
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