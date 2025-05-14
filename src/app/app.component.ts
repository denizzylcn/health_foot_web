import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component olarak işaret ettik
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule]  // RouterModule'ı import ettik
})
export class AppComponent {
  title = 'ayak-bakim-web';
}
