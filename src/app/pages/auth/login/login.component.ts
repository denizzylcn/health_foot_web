import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const loginData = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  };

  this.authService.login(loginData).subscribe({
    next: (res) => {
      const userInfo = this.authService.getUserInfoFromToken();

      if (userInfo) {
        const isim = userInfo.email.split('@')[0];
        const mesaj = userInfo.role === 'User'
          ? `Hoş geldin ${isim}! 👋`
          : `Hoş geldiniz ${isim}! 🧑‍💼`;

        this.toastr.success(mesaj, 'Giriş Başarılı', {
          positionClass: 'toast-bottom-right'
        });
      }

      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Hata:', err);
      this.toastr.error('E-posta veya şifre hatalı. 😢', 'Giriş Başarısız', {
        positionClass: 'toast-bottom-right'
      });
    }
  });
}

}
