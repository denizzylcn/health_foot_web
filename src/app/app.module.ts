import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RandevuComponent } from './pages/randevu/randevu.component';

@NgModule({
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,         // ✅ toastr için gerekli
    ToastrModule.forRoot(),          // ✅ toastr config
    RouterModule.forRoot([])    ,
    RandevuComponent     // yönlendirmeler buraya eklenebilir
  ],
  providers: [],
  bootstrap: []  // Eğer standalone değilse buraya AppComponent vs. eklenir
})
export class AppModule { }
