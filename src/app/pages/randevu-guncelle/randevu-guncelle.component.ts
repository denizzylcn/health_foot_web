
// randevu-guncelle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandevuService } from '../../services/randevu.service';
import { Randevu } from '../../models/randevu.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-randevu-guncelle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './randevu-guncelle.component.html',
  styleUrls: ['./randevu-guncelle.component.css']
})
export class RandevuGuncelleComponent implements OnInit {
  randevu: Randevu = new Randevu();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randevuService: RandevuService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.randevuService.getRandevuById(id).subscribe(data => {
    this.randevu = data;
  });
}


  guncelle(): void {
    this.randevuService.updateRandevu(this.randevu).subscribe(() => {
      alert('Randevu güncellendi!');
      this.router.navigate(['/randevular']);
    });
  }
}
