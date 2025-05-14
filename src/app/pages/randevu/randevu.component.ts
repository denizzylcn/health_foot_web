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
  mesajTipi: 'basari' | 'hata' | '' = '';

  constructor(private randevuService: RandevuService) {}

  ngOnInit(): void {}

  randevuAl(): void {

     console.log('Form gönderildi:', this.tarih, this.saat);
    const yeniRandevu: Randevu = {
      Tarih: this.tarih,
      Saat: this.saat,
      Aciklama: this.aciklama,
      KullaniciId: 1 // örnek ID, kullanıcı giriş sistemine göre değiştirilebilir
      ,
      Id: 0
    };

    this.randevuService.getRandevular().subscribe(randevular => {
      const cakisan = randevular.find(r =>
        r.Tarih === yeniRandevu.Tarih && r.Saat === yeniRandevu.Saat
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
