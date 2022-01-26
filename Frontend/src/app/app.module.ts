import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FADAFormComponent } from './fa-daform/fa-daform.component';
import { FaDaWebformComponent } from './fa-da-webform/fa-da-webform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FADashbooardComponent } from './fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './fa-search/fa-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FADAFormComponent,
    FaDaWebformComponent,
    FADashbooardComponent,
    FASearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
