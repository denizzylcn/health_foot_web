// src/app/services/yorum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yorum } from '../models/yorum.model';

@Injectable({ providedIn: 'root' })
export class YorumService {
  private apiUrl = 'http://localhost:5130/api/Comments';

  constructor(private http: HttpClient) {}

  yorumEkle(yorum: Yorum): Observable<any> {
    return this.http.post(`${this.apiUrl}`, yorum);
  }

  getYorumlar(): Observable<Yorum[]> {
    return this.http.get<Yorum[]>(`${this.apiUrl}`);
  }
}
