import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandevuService } from '../../services/randevu.service';
import { Randevu } from '../../models/randevu.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hesap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css']
})
export class HesapComponent implements OnInit {
  randevular: Randevu[] = [];

 constructor(
  private randevuService: RandevuService,
  private router: Router
) {}

deleteRandevu(id: number): void {
  if (confirm('Bu randevuyu silmek istiyor musunuz?')) {
    this.randevuService.deleteRandevu(id).subscribe(() => {
      this.randevular = this.randevular.filter(r => r.id !== id);
    });
  }
}

editRandevu(r: Randevu): void {
  this.router.navigate(['/randevu-guncelle', r.id]);
}
goToAdminPanel() {
  window.location.href = 'http://localhost:4300';
}


  ngOnInit(): void {
    const currentUserId = 1; // geçici olarak sabit kullanıcı ID
    this.randevuService.getRandevular().subscribe(data => {
      this.randevular = data.filter(r => r.kullaniciId === currentUserId);
    });
  }
}

