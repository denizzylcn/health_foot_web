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
  }
  
];
