import { Routes } from '@angular/router';
import { ProdottiComponent } from './components/prodotti/prodotti';
import { ProfiloComponent } from './components/profilo/profilo';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/prodotti', pathMatch: 'full' },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrati', component: RegisterComponent }
];