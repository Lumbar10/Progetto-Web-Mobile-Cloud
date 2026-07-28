import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (user) {
    return true; // Utente autenticato, accesso consentito
  }

  // Utente non autenticato: reindirizzamento al login
  router.navigate(['/login']);
  return false;
};