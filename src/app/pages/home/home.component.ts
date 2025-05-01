import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true 
})
export class HomeComponent {
  services = [
    {
      name: 'Medikal Bakım',
      icon: '💼',
      description: 'Medikal bakım ve uzman tedavisi.',
      bgColor: '#7e57c2', // Dinamik arka plan rengi
    },
    {
      name: 'Nasır Temizliği',
      icon: '🦶',
      description: 'Ayak nasırlarının temizlenmesi.',
      bgColor: '#ff7043', // Dinamik arka plan rengi
    },
    {
      name: 'Tırnak Batması',
      icon: '🦶‍💥',
      description: 'Tırnak batması tedavisi.',
      bgColor: '#66bb6a', // Dinamik arka plan rengi
    },
    {
      name: 'Tırnak Mantar Tedavisi',
      icon: '🦠',
      description: 'Tırnak mantarı tedavisi için çözümler.',
      bgColor: '#ffa726', // Dinamik arka plan rengi
    },
    {
      name: 'Topuk Çatlağı Bakımı',
      icon: '💧',
      description: 'Topuk çatlaklarına bakım.',
      bgColor: '#ab47bc', // Dinamik arka plan rengi
    }
  ];
  constructor(private router: Router) {}

  // Giriş Yap'a yönlendir
  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  // Kayıt Ol'a yönlendir
  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
