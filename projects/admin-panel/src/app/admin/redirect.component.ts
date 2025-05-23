import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-redirect',
  standalone: true,
  template: ''
})
export class AdminRedirectComponent {
  constructor() {
    const token = localStorage.getItem('adminToken');
    const router = inject(Router);
    router.navigateByUrl(token ? '/dashboard' : '/login');
  }
}
