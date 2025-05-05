import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = '';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // ✅ Burayı da düzelttik

        const email = decoded["email"] || decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
        const role = decoded["role"] || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

        const isim = email?.split('@')[0] || 'kullanıcı';

        if (role === 'User') {
          this.welcomeMessage = `Hoş geldin, ${isim}! 👋`;
        } else if (role === 'Employee') {
          this.welcomeMessage = `Hoş geldiniz, ${isim}! 🧑‍💼`;
        } else {
          this.welcomeMessage = `Merhaba, ${isim}`;
        }
      } catch (e) {
        console.error('Token çözümleme hatası:', e);
      }
    }
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
