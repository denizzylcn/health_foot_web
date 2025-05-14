import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandevuService } from '../../services/randevu.service';
import { Randevu } from '../../models/randevu.model';

@Component({
  selector: 'app-randevu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randevu-list.component.html',
  styleUrls: ['./randevu-list.component.css']
})
export class RandevuListComponent implements OnInit {
  randevular: Randevu[] = [];

  constructor(private randevuService: RandevuService) {}

  ngOnInit(): void {
    this.randevuService.getRandevular().subscribe(data => {
    console.log('🟢 Gelen randevular:', data);
    this.randevular = data;
  });
  }
}

