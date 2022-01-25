import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FADAFormComponent } from './fa-daform/fa-daform.component';
import { FaDaWebformComponent } from './fa-da-webform/fa-da-webform.component';

@NgModule({
  declarations: [
    AppComponent,
    FADAFormComponent,
    FaDaWebformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
