import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameSurname = '';
  email = '';
  phone = '';
  messageContent = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const contactData = {
      nameSurname: this.nameSurname,
      email: this.email,
      phone: this.phone,
      messageContent: this.messageContent
    };

    this.http.post(`${environment.apiBaseUrl}/contact/send`, contactData).subscribe({
  next: (res: any) => {
    alert(res.message || 'Mesaj başarıyla gönderildi!');
  },
  error: (err) => {
    alert(err.error.message || 'Gönderim sırasında bir hata oluştu.');
  }
});

  }
}
