import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ayak-analizi',
  templateUrl: './ayak-analizi.component.html',
  styleUrls: ['./ayak-analizi.component.css'] 
})
export class AyakAnaliziComponent {
  selectedFile!: File;
  responseMessage = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

   this.http.post<{ result: string }>('http://localhost:5130/api/AyakAnaliz', formData)

      .subscribe({
        next: (res) => this.responseMessage = res.result,
        error: (err) => this.responseMessage = 'Hata oluştu.'
      });
  }
}
