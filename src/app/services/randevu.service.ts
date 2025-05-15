import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Randevu } from '../models/randevu.model';  // Modeli doğru import ettik

@Injectable({
  providedIn: 'root'  // Bu, servisin tüm uygulama genelinde erişilebilir olmasını sağlar
})
export class RandevuService {


  deleteRandevu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }


  private baseUrl = 'http://localhost:5130/api/Randevu';  // API URL

  constructor(private http: HttpClient) { }

  createRandevu(randevu: Randevu): Observable<Randevu> {
    return this.http.post<Randevu>(`${this.baseUrl}/create`, randevu);
  }

  getRandevular(): Observable<Randevu[]> {
    return this.http.get<Randevu[]>(`${this.baseUrl}/list`);
  }
  getRandevuById(id: number): Observable<Randevu> {
  return this.http.get<Randevu>(`${this.baseUrl}/${id}`);
}

updateRandevu(randevu: Randevu): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/${randevu.id}`, randevu);
}



}
