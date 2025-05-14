import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Randevu } from '../models/randevu.model';  // Modeli doğru import ettik

@Injectable({
  providedIn: 'root'  // Bu, servisin tüm uygulama genelinde erişilebilir olmasını sağlar
})
export class RandevuService {

  private baseUrl = 'http://localhost:5130/api/Randevu';  // API URL

  constructor(private http: HttpClient) { }

  createRandevu(randevu: Randevu): Observable<Randevu> {
  return this.http.post<Randevu>(`${this.baseUrl}/create`, randevu);
}

getRandevular(): Observable<Randevu[]> {
  return this.http.get<Randevu[]>(`${this.baseUrl}/list`);
}

}
