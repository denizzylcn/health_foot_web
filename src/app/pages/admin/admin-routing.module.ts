import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RandevularComponent } from './randevular/randevular.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { HizmetlerComponent } from './hizmetler/hizmetler.component';
import { YorumlarComponent } from './yorumlar/yorumlar.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/randevular', component: RandevularComponent },
  { path: 'admin/kullanicilar', component: KullanicilarComponent },
  { path: 'admin/hizmetler', component: HizmetlerComponent },
  { path: 'admin/yorumlar', component: YorumlarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
