import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { FirebaseService } from '../../services/firebase.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ayak-analizi',
  standalone: true,
  templateUrl: './ayak-analizi.component.html',
  styleUrls: ['./ayak-analizi.component.css'],
  imports: [CommonModule, HttpClientModule],
})
export class AyakAnaliziComponent {
  selectedFile!: File;
  responseMessage = '';
  isUploading = false;
  uploadProgress = 0;

  constructor(private http: HttpClient, private firebaseService: FirebaseService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const file = this.selectedFile;
    const filePath = `ayak-analizleri/${Date.now()}_${file.name}`;
    const fileRef = ref(this.firebaseService.getStorageInstance(), filePath);

    const uploadTask = uploadBytesResumable(fileRef, file);

    this.isUploading = true;

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error('Yükleme hatası:', error);
        this.responseMessage = 'Yükleme sırasında hata oluştu.';
        this.isUploading = false;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.http
            .post<{ result: string }>('http://localhost:5130/api/AyakAnaliz/url', { imageUrl: url })
            .subscribe({
              next: (res) => {
                this.responseMessage = res.result;
                this.isUploading = false;
              },
              error: () => {
                this.responseMessage = 'API isteği başarısız.';
                this.isUploading = false;
              },
            });
        });
      }
    );
  }
}
