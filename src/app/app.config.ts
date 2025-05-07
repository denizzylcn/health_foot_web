import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser'; // ✅ Eksikmiş
import { AppComponent } from './app.component'; // ✅ Eksikmiş

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()  // <-- Bu sayede HttpClient bileşenlerde çalışacak
  ]
};

bootstrapApplication(AppComponent, appConfig); // ✅ Bu da tamam
