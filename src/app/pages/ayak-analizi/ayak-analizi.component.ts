import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FirebaseService } from '../../services/firebase.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-ayak-analizi',
  standalone: true,
  templateUrl: './ayak-analizi.component.html',
  styleUrls: ['./ayak-analizi.component.css'],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    
  ]
})

export class AyakAnaliziComponent {
  selectedFile!: File;
  responseMessage = '';
  isLoading = false;

  constructor(private http: HttpClient, private firebaseService: FirebaseService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (!this.selectedFile) return;

    this.isLoading = true;

    this.firebaseService.uploadImage(this.selectedFile).then((url) => {
      this.http.post<{ result: string }>('http://localhost:5130/api/AyakAnaliz/url', {
        imageUrl: url
      }).subscribe({
        next: (res) => {
          this.responseMessage = res.result;
          this.isLoading = false;
        },
        error: (err) => {
          this.responseMessage = 'Hata oluştu.';
          this.isLoading = false;
        }
      });
    }).catch(() => {
      this.responseMessage = 'Fotoğraf yüklenirken bir hata oluştu.';
      this.isLoading = false;
    });
  }
}
