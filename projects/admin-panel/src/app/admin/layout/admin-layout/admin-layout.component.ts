import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../../components/sidebar/sidebar.component'; // 💡 path seninkine göre uyarlanabilir

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    SidebarComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {}
