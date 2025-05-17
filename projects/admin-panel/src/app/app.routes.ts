import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'randevular',
        loadComponent: () =>
          import('./admin/randevular/randevular.component').then(m => m.RandevularComponent),
      },
      {
        path: 'kullanicilar',
        loadComponent: () =>
          import('./admin/kullanicilar/kullanicilar.component').then(m => m.KullanicilarComponent),
      },
      {
        path: 'hizmetler',
        loadComponent: () =>
          import('./admin/hizmetler/hizmetler.component').then(m => m.HizmetlerComponent),
      },
      {
        path: 'yorumlar',
        loadComponent: () =>
          import('./admin/yorumlar/yorumlar.component').then(m => m.YorumlarComponent),
      },
    ]
  },
  // isteğe bağlı olarak hatalı yolları yakala
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
