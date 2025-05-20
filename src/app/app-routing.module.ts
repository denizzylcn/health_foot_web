import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RandevuComponent } from './pages/randevu/randevu.component';
import { AyakAnaliziComponent } from './pages/ayak-analizi/ayak-analizi.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa
  { path: 'services', component: ServicesComponent }, // Hizmetler sayfası
  { path: 'appointments', component: AppointmentsComponent }, // Randevu alma sayfası
  { path: 'contact', component: ContactComponent },
  { path: 'randevu', component: RandevuComponent },
  { path: 'ayak-analizi', component: AyakAnaliziComponent },

  // bilinmeyen route'lar ana sayfaya yönlendirilir
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

