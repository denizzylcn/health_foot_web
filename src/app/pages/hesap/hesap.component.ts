import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandevuService } from '../../services/randevu.service';
import { Randevu } from '../../models/randevu.model';


@Component({
  selector: 'app-hesap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css']
})
export class HesapComponent implements OnInit {
  randevular: Randevu[] = [];

  constructor(private randevuService: RandevuService) {}

  ngOnInit(): void {
    const currentUserId = 1; // geçici olarak sabit kullanıcı ID
    this.randevuService.getRandevular().subscribe(data => {
      this.randevular = data.filter(r => r.kullaniciId === currentUserId);
    });
  }
}

