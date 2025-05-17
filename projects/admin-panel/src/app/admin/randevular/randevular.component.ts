import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Randevu } from '../../../../../../src/app/models/randevu.model';
import { RandevuService } from '../services/randevu.service';


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
      this.randevular = data;
    });
  }

  onayla(id: number): void {
    this.randevuService.onaylaRandevu(id).subscribe(() => {
      this.getRandevular();
    });
  }

  deleteRandevu(id: number): void {
    if (confirm('Bu randevuyu silmek istiyor musunuz?')) {
      this.randevuService.deleteRandevu(id).subscribe(() => {
        this.getRandevular();
      });
    }
  }

  editRandevu(r: Randevu): void {
    this.router.navigate(['/randevu-guncelle', r.id]);
  }
}
