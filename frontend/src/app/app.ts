import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottoService } from './services/prodotto';
import { Observable, BehaviorSubject, switchMap, map, debounceTime, combineLatest, distinctUntilChanged } from 'rxjs';
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

  errorMessage: string | null = null;

  termineRicerca = '';
  private searchSubject = new BehaviorSubject<string>('');

  prodottoInModifica: any = null;

  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private prodottoService: ProdottoService) {
    this.prodotti$ = combineLatest([
      this.refresh$,
      this.searchSubject.pipe(debounceTime(300), distinctUntilChanged())
    ]).pipe(
      switchMap(() => this.prodottoService.getProdotti()),
      map(prodotti => prodotti.filter(p =>
        p.nome.toLowerCase().includes(this.termineRicerca.toLowerCase())
      ))
    );
  }

  eliminaProdotto(id: number) {
    this.prodottoService.deleteProdotto(id).subscribe(() => {
      // Dopo aver eliminato il prodotto, aggiorna la lista dei prodotti
      this.refresh$.next();
    });
  }

  selezionaPerModifica(p: any) {
    this.prodottoInModifica = p;
    this.nuovoProdotto = { nome: p.nome, descrizione: p.descrizione, quantita: p.quantita };
  }

  salvaProdotto() {
    if (!this.nuovoProdotto.nome.trim() || !this.nuovoProdotto.descrizione.trim() || this.nuovoProdotto.quantita < 0) {
      this.errorMessage = 'Compila tutti i campi correttamente e inserisci una quantità valida.';
      return;
    }

    this.errorMessage = null;

    if (this.prodottoInModifica) {
      this.prodottoService.updateProdotto(this.prodottoInModifica.id, this.nuovoProdotto).subscribe(() => {
        this.refresh$.next();
        this.resetForm();
      });
    } else {
      this.prodottoService.addProdotto(this.nuovoProdotto).subscribe(() => {
        this.refresh$.next();
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.nuovoProdotto = { nome: '', descrizione: '', quantita: 0 };
    this.prodottoInModifica = null;
  }

  cercaProdotti(termine: string) {
    this.searchSubject.next(termine);
  }


}