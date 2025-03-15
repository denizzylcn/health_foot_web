import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // ROUTING MODÜLÜ DOĞRU ŞEKİLDE IMPORT EDİLDİ!
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,  // Ana bileşeni ekledik
    HomeComponent  // Ana sayfa bileşeni
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Routing modülünü buraya ekledik
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

