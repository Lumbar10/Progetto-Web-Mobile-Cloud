import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottoService } from './services/prodotto';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  prodotti$: Observable<any[]>;
  nuovoProdotto = {
    nome: '',
    descrizione: '',
    quantita: 0
  };

  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private prodottoService: ProdottoService) {
    this.prodotti$ = this.refresh$.pipe(
      switchMap(() => this.prodottoService.getProdotti())
    );
  }

  salvaProdotto() {
    this.prodottoService.addProdotto(this.nuovoProdotto).subscribe(() => {
      // Dopo aver aggiunto il prodotto, aggiorna la lista dei prodotti
      this.refresh$.next();
      // Resetta il form del nuovo prodotto
      this.nuovoProdotto = { nome: '', descrizione: '', quantita: 0 };
    });
  }

  eliminaProdotto(id: number) {
    this.prodottoService.deleteProdotto(id).subscribe(() => {
      // Dopo aver eliminato il prodotto, aggiorna la lista dei prodotti
      this.refresh$.next();
    });
  }
}