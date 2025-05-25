import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AdminRedirectComponent } from './redirect.component';
import { AuthGuard } from './auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminRedirectComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'randevular',
        loadComponent: () => import('./randevular/randevular.component').then(m => m.RandevularComponent)
      },
      {
        path: 'kullanicilar',
        loadComponent: () => import('./kullanicilar/kullanicilar.component').then(m => m.KullanicilarComponent)
      },
      {
        path: 'hizmetler',
        loadComponent: () => import('./hizmetler/hizmetler.component').then(m => m.HizmetlerComponent)
      },
      {
        path: 'yorumlar',
        loadComponent: () => import('./yorumlar/yorumlar.component').then(m => m.YorumlarComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
