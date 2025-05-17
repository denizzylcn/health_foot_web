import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RandevuService } from '../services/randevu.service';
import { Randevu } from '../../../../../../src/app/models/randevu.model';

@Component({
  selector: 'app-randevular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randevular.component.html',
  styleUrls: ['./randevular.component.css']
})
export class RandevularComponent implements OnInit {
  randevular: Randevu[] = [];

  constructor(private randevuService: RandevuService, private router: Router) {}

  ngOnInit(): void {
    this.getRandevular();
  }

  getRandevular(): void {
    this.randevuService.getRandevular().subscribe((data: Randevu[]) => {
      console.log("Tüm randevular:", data);
      this.randevular = data.filter(r => r.durum === 'Bekliyor');
    });
  }

 onayla(id: number): void {
  this.randevuService.onaylaRandevu(id).subscribe({
    next: () => {
      console.log("Randevu onaylandı.");
      this.getRandevular(); // listeyi güncelle
    },
    error: (err) => {
      console.error("Onaylama işlemi başarısız:", err);
    }
  });
}


editRandevu(r: Randevu): void {
  this.router.navigate(['/randevu-guncelle', r.id]);
}

deleteRandevu(id: number): void {
  if (confirm('Bu randevuyu silmek istiyor musunuz?')) {
    this.randevuService.deleteRandevu(id).subscribe(() => {
      this.getRandevular(); // silindikten sonra yenile
    });
  }
}

}
