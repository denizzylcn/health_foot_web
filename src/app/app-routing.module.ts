import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa
  { path: 'services', component: ServicesComponent }, // Hizmetler sayfası
  { path: 'appointments', component: AppointmentsComponent }, // Randevu alma sayfası
  { path: '**', redirectTo: '', pathMatch: 'full' } // Geçersiz URL’lerde ana sayfaya yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

