export class Randevu {
   id: number = 0;
  kullaniciId: number = 0;
  tarih: string = '';
  saat: string = '';
  aciklama: string = '';
  email: string = '';
  telefon: string = '';

  constructor(
    id: number = 0,
    kullaniciId: number = 0,
    tarih: string = '',
    saat: string = '',
    aciklama: string = '',
    email: string = '',
    telefon: string = ''
  ) {
    this.id = id;
    this.kullaniciId = kullaniciId;
    this.tarih = tarih;
    this.saat = saat;
    this.aciklama = aciklama;
    this.email = email;
    this.telefon = telefon;
  }
}
