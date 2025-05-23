import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Standalone bileşenler
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminRedirectComponent } from './redirect.component';

// Angular Material ve Router
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

// Gerekli tüm standalone component'ler sadece imports içine yazılır
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,

    // ✅ Standalone bileşenler
    LoginComponent,
    AdminLayoutComponent,
    SidebarComponent,
    AdminRedirectComponent,

    // ✅ Angular Material + Router
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AdminModule {}
