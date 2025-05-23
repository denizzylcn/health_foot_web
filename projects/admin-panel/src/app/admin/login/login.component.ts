import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  standalone: true,
   imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  hataMesaji = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.post<any>('http://localhost:5130/api/admin/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: res => {
        localStorage.setItem('adminToken', res.token || 'true'); // token varsa onunla kaydediyoruz
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.hataMesaji = err.error.message || 'Giriş başarısız!';
      }
    });
  }
}
