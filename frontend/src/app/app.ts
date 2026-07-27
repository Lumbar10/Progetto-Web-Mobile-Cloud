import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottoService } from './services/prodotto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  prodotti$: Observable<any[]>;

  constructor(private prodottoService: ProdottoService) {
    this.prodotti$ = this.prodottoService.getProdotti();
  }
}