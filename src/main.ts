import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from './environments/environment';

import { AyakAnaliziComponent } from './app/pages/ayak-analizi/ayak-analizi.component';

bootstrapApplication(AyakAnaliziComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ]
}).catch(err => console.error(err));
