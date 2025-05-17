import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  toplamKullanici: number = 0;
  bekleyenRandevu: number = 0;
  tamamlananRandevu: number = 0;
  yorumSayisi: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<number>('http://localhost:5130/api/Users/Sayi')
      .subscribe(data => this.toplamKullanici = data);

    this.http.get<number>('http://localhost:5130/api/Randevu/BekleyenSayi')
      .subscribe(data => this.bekleyenRandevu = data);

    this.http.get<number>('http://localhost:5130/api/Randevu/TamamlananSayi')
      .subscribe(data => this.tamamlananRandevu = data);

    this.http.get<number>('http://localhost:5130/api/Comments/Sayi')
      .subscribe(data => this.yorumSayisi = data);
  }

  goTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
