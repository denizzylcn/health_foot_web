import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private storage: Storage) {}

  async uploadImage(file: File): Promise<string> {
    const filePath = `ayak-analizleri/${Date.now()}_${file.name}`;
    const fileRef = ref(this.storage, filePath);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  }
  getStorageInstance() {
  return this.storage;
}

}
