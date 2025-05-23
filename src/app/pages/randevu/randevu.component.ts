import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RandevuService } from '../../services/randevu.service';
import { Randevu } from '../../models/randevu.model';

@Component({
  selector: 'app-randevu',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './randevu.component.html',
  styleUrls: ['./randevu.component.css']
})
export class RandevuComponent implements OnInit {
  tarih = '';
  saat = '';
  aciklama = '';
  mesaj = '';
  email: string = '';
  telefon: string = '';

  tumRandevular: Randevu[] = [];
  doluSaatler: string[] = [];
  saatler: string[] = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  mesajTipi: 'basari' | 'hata' | '' = '';

  constructor(private randevuService: RandevuService) { }

  ngOnInit(): void {
    this.randevuService.getRandevular().subscribe(randevular => {
      this.tumRandevular = randevular;
    });
  }

  tarihDegisti(): void {
  const secilenTarih = new Date(this.tarih).toISOString().split('T')[0];

  this.doluSaatler = this.tumRandevular
    .filter(r => {
      const kayitTarih = typeof r.tarih === 'string' ? r.tarih.split('T')[0] : new Date(r.tarih).toISOString().split('T')[0];
      return kayitTarih === secilenTarih;
    })
    .map(r => r.saat);
}


  randevuAl(): void {
    console.log('Form gönderildi:', this.tarih, this.saat);

    const yeniRandevu: Randevu = {
      id: 0,
      kullaniciId: 1,
      tarih: this.tarih,
      saat: this.saat,
      aciklama: this.aciklama,
      email: this.email,
      telefon: this.telefon,
      durum: 'Bekliyor'
    };

    this.randevuService.getRandevular().subscribe(randevular => {
      const cakisan = randevular.find(r => {
        const kayitTarih = typeof r.tarih === 'string' ? r.tarih.split('T')[0] : new Date(r.tarih).toISOString().split('T')[0];
        const secilenTarih = new Date(this.tarih).toISOString().split('T')[0];
        return kayitTarih === secilenTarih && r.saat === this.saat;
      });

      if (cakisan) {
        this.mesaj = 'Bu tarih ve saat dolu. Lütfen başka bir zaman seçin.';
        this.mesajTipi = 'hata';
      } else {
        this.randevuService.createRandevu(yeniRandevu).subscribe(() => {
          this.mesaj = 'Randevunuz başarıyla oluşturuldu!';
          this.mesajTipi = 'basari';
          this.tarih = '';
          this.saat = '';
          this.aciklama = '';
          this.email = '';
          this.telefon = '';
        });
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}