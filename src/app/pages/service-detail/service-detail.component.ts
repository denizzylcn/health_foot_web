import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  serviceId: string | null = null;
  service: any;
  splitParagraphs(text: string): string[] {
    return text.split('\n').filter(p => p.trim() !== '');
  }

  isBullet(paragraph: string): boolean {
    return paragraph.trim().startsWith('-');
  }

  getBulletItems(paragraph: string): string[] {
    return paragraph
      .split('-')
      .map(i => i.trim())
      .filter(i => i !== '');
  }
  expandedQuestionIndex: number | null = null;

  toggleQuestion(index: number) {
    this.expandedQuestionIndex = this.expandedQuestionIndex === index ? null : index;
  }
  
  ngOnInit(): void {
    this.serviceId = this.route.snapshot.paramMap.get('id');

    this.http.get<any[]>('assets/data/services.json').subscribe(data => {
      this.service = data.find(s => s.id === this.serviceId);
      console.log('Servis:', this.service);
    });
    
  }
}
