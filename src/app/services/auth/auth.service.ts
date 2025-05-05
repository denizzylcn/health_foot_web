import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5130/api/auth';

  constructor(private http: HttpClient) { }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email: data.email,
      passwordHash: data.password
    }).pipe(
      tap((res: any) => {
        console.log('API CEVABI:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('fullName', res.fullName); // eklendi
          localStorage.setItem('role', res.role);
        }
      })
    );
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // 🔍 Token'dan kullanıcı bilgisi çözümleme
  getUserInfoFromToken(): { email: string, role: string } | null {
    const token = this.getToken();
    if (!token) return null;
  
    try {
      const decoded: any = jwtDecode(token);
      const email = decoded["email"] || decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      const role = decoded["role"] || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      return { email, role };
    } catch (e) {
      console.error("Token çözümleme hatası:", e);
      return null;
    }
  }
  
}
function jwtDecode(token: string): any {
  throw new Error('Function not implemented.');
}

