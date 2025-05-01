import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true  // AppComponent'i standalone olarak tanımlıyoruz
})
export class AppComponent {
  title = 'ayak-bakim-web';
}
