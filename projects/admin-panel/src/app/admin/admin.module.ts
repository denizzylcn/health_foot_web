import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component'; // ✅ standalone
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component'; // ✅ standalone
import { SidebarComponent } from './components/sidebar/sidebar.component'; // ✅ standalone

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
 
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,

    // ✅ Standalone bileşenler
    LoginComponent,
    AdminLayoutComponent,
    SidebarComponent,

    // ✅ Angular Material + Router
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AdminModule { }
