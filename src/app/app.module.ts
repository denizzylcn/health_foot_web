import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RandevuComponent } from './pages/randevu/randevu.component';
import { AyakAnaliziComponent } from './pages/ayak-analizi/ayak-analizi.component';
import { environment } from '../environments/environment';
 
@NgModule({
   declarations: [
    AyakAnaliziComponent,
    RandevuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,         // ✅ toastr için gerekli
    ToastrModule.forRoot(),          // ✅ toastr config
    RouterModule.forRoot([])      
  ],
  providers: [],
  bootstrap: []  // Eğer standalone değilse buraya AppComponent vs. eklenir
})
export class AppModule { }
