import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { RandevularComponent } from './randevular/randevular.component';
import { YorumlarComponent } from './yorumlar/yorumlar.component';
import { HizmetlerComponent } from './hizmetler/hizmetler.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      { path: 'kullanicilar', component: KullanicilarComponent },
      { path: 'randevular', component: RandevularComponent },
      { path: 'hizmetler', component: HizmetlerComponent },
      { path: 'yorumlar', component: YorumlarComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
