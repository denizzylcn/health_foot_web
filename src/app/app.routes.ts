import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'hizmetler/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  
  {
    path: 'hizmetler/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'hizmetler/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'hizmetler/hamile-ayak-bakimi',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'hizmetler/nasir-temizleme',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  
  {
    path: 'hizmetler/kalin-tirnak-bakimi',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'hizmetler/evde-hizmet',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'hizmetler/refleksoloji-masaji',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  }
  
];
