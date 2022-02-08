import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FADAFormComponent } from './pages/fa-daform/fa-daform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './pages/fa-search/fa-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { DetailedDaformComponent } from './pages/detailed-daform/detailed-daform.component';
@NgModule({
  declarations: [
    AppComponent,
    FADAFormComponent,
    FADashbooardComponent,
    FASearchComponent,
    LandingComponent,
    DetailedDaformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
