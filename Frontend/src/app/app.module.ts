import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FADAFormComponent } from './fa-daform/fa-daform.component';
import { FaDaWebformComponent } from './fa-da-webform/fa-da-webform.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FADashbooardComponent } from './fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './fa-search/fa-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
    NoopAnimationsModule,
    //BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
