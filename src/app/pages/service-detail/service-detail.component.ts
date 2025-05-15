import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private router = inject(Router);


  serviceId: string | null = null;
  service: any;
  expandedQuestionIndex: number | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id');
      this.getServiceDetail();
    });
  }

  getServiceDetail(): void {
    this.http.get<any[]>('assets/data/services.json').subscribe(data => {
      this.service = data.find(s => s.id === this.serviceId);
      console.log('Servis:', this.service);
    });
  }

  toggleQuestion(index: number) {
    this.expandedQuestionIndex = this.expandedQuestionIndex === index ? null : index;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
  goToRandevu(): void {
  this.router.navigate(['/randevu']);
}

}
