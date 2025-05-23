import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { YorumService } from '../../services/yorum.service';
import { Yorum } from '../../models/yorum.model';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = '';
  kullaniciId: number = 0;

  yeniYorum: Yorum = {
    id: 0,
    name: '',
    content: '',
    rating: 5,
    createdAt: ''
  };

  services = [
    {
      name: 'Medikal Bakım',
      icon: '💼',
      description: 'Medikal bakım ve uzman tedavisi.',
      bgColor: '#7e57c2'
    },
    {
      name: 'Nasır Temizliği',
      icon: '🦶',
      description: 'Ayak nasırlarının temizlenmesi.',
      bgColor: '#ff7043'
    },
    {
      name: 'Tırnak Batması',
      icon: '🦶‍💥',
      description: 'Tırnak batması tedavisi.',
      bgColor: '#66bb6a'
    },
    {
      name: 'Tırnak Mantar Tedavisi',
      icon: '🦠',
      description: 'Tırnak mantarı tedavisi için çözümler.',
      bgColor: '#ffa726'
    },
    {
      name: 'Topuk Çatlağı Bakımı',
      icon: '💧',
      description: 'Topuk çatlaklarına bakım.',
      bgColor: '#ab47bc'
    }
  ];

  constructor(private router: Router, private yorumService: YorumService) {}

  ngOnInit(): void {
    // Token ile isim alma işlemi
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const email = decoded["email"] || decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
        const isim = email?.split('@')[0] || 'Ziyaretçi';
        this.yeniYorum.name = isim;
        this.yeniYorum.createdAt = new Date().toISOString();
      } catch (e) {
        console.error('Token çözümleme hatası:', e);
      }
    }

    // Harita yükleme işlemi
     const location = { lat: 38.6757634, lng: 39.2183514 };

  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: location,
    zoom: 17,
  });

    new google.maps.Marker({
    position: location,
    map: map,
    title: 'Elazığ Ayak Bakım Merkezi',
  });
  }

  yorumGonder(): void {
    this.yorumService.yorumEkle(this.yeniYorum).subscribe({
      next: () => {
        alert('Yorum başarıyla gönderildi!');
        this.yeniYorum = {
          id: 0,
          name: this.yeniYorum.name,
          content: '',
          rating: 5,
          createdAt: new Date().toISOString()
        };
      },
      error: (err) => {
        console.error('Yorum gönderme hatası:', err);
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
