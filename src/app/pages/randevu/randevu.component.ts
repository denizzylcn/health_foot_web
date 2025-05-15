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

  mesajTipi: 'basari' | 'hata' | '' = '';

  constructor(private randevuService: RandevuService) { }

  ngOnInit(): void { }

  randevuAl(): void {

    console.log('Form gönderildi:', this.tarih, this.saat);

    const yeniRandevu: Randevu = {
      id: 0,
      kullaniciId: 1,
      tarih: this.tarih,
      saat: this.saat,
      aciklama: this.aciklama,
      email: this.email,
      telefon: this.telefon
    };

    this.randevuService.getRandevular().subscribe(randevular => {
      const cakisan = randevular.find(r =>
        r.tarih === yeniRandevu.tarih && r.saat === yeniRandevu.saat
      );

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
        });
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
