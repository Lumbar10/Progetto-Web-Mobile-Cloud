import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private apiUrl = 'http://localhost:8080/api/prodotti';

  constructor(private http: HttpClient) {}

  getProdotti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { withCredentials: true });
  }

  addProdotto(prodotto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, prodotto, { withCredentials: true });
  }

  updateProdotto(id: number, prodotto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, prodotto, { withCredentials: true });
  }

  deleteProdotto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }
}