export class Randevu {
  [x: string]: any;
  id: number = 0;
  kullaniciId: number = 0;
  tarih: string = '';
  saat: string = '';
  aciklama: string = '';
  email: string = '';
  telefon: string = '';
  durum: string; // ✅ varsayılan olarak Bekliyor

  constructor(
    id: number = 0,
    kullaniciId: number = 0,
    tarih: string = '',
    saat: string = '',
    aciklama: string = '',
    email: string = '',
    telefon: string = '',
    durum: string = 'Bekliyor' // ✅ opsiyonel olarak da alabilsin
  ) {
    this.id = id;
    this.kullaniciId = kullaniciId;
    this.tarih = tarih;
    this.saat = saat;
    this.aciklama = aciklama;
    this.email = email;
    this.telefon = telefon;
    this.durum = durum;
  }
}
