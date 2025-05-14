export class Randevu {
  Id: number;
  KullaniciId: number;
  Tarih: string;
  Saat: string;
  Aciklama: string;

  constructor(Id: number = 0, KullaniciId: number = 0, Tarih: string = '', Saat: string = '', Aciklama: string = '') {
    this.Id = Id;
    this.KullaniciId = KullaniciId;
    this.Tarih = Tarih;
    this.Saat = Saat;
    this.Aciklama = Aciklama;
  }
}
