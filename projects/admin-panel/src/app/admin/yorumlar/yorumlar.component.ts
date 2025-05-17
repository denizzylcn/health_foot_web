import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YorumService } from '../../../../../../src/app/services/yorum.service';
import { Yorum } from '../../../../../../src/app/models/yorum.model';

@Component({
  selector: 'app-yorumlar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yorumlar.component.html',
  styleUrls: ['./yorumlar.component.css']
})
export class YorumlarComponent implements OnInit {
  yorumlar: Yorum[] = [];

  constructor(private yorumService: YorumService) {}

  ngOnInit(): void {
    this.getYorumlar();
  }

  getYorumlar() {
    this.yorumService.getYorumlar().subscribe({
      next: (data) => {
        this.yorumlar = data;
      },
      error: (err) => {
        console.error('Yorumlar alınamadı:', err);
      }
    });
  }
}
