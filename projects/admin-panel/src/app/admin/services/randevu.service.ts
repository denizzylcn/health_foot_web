import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Randevu } from '../../../../../../src/app/models/randevu.model';
// Randevu modelin bu klasörde değilse yolu güncelle

@Injectable({
    providedIn: 'root'
})
export class RandevuService {
    private apiUrl = 'http://localhost:5130/api/Randevu';

    constructor(private httpClient: HttpClient) { }

    getRandevular(): Observable<Randevu[]> {
        return this.httpClient.get<Randevu[]>(this.apiUrl);
    }

    deleteRandevu(id: number): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/${id}`);
    }

    onaylaRandevu(id: number): Observable<any> {
        return this.httpClient.patch(`${this.apiUrl}/Onayla/${id}`, {});
    }


    updateRandevu(randevu: Randevu): Observable<any> {
        return this.httpClient.put(`${this.apiUrl}/${randevu.id}`, randevu);
    }
}
