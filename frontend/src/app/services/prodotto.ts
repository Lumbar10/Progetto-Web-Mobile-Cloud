import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private apiUrl = 'http://localhost:8080/api/prodotti';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProdotto(prodotto: any) {
    return this.http.post('http://localhost:8080/api/prodotti', prodotto);
  }

  deleteProdotto(id: number) {
    return this.http.delete(`http://localhost:8080/api/prodotti/${id}`);
  }

  updateProdotto(id: number, prodotto: any) {
    return this.http.put(`http://localhost:8080/api/prodotti/${id}`, prodotto);
  }

}