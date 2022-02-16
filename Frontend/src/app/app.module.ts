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
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FADAFormComponent } from './pages/to remove/fa-daform/fa-daform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { DetailedDaformComponent } from './pages/to remove/detailed-daform/detailed-daform.component';
import { MocReportComponent } from './pages/moc-report/moc-report.component';
import { MocReportsViewComponent } from './pages/moc-reports-view/moc-reports-view.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';
import { DAFormOneCollectionComponent } from './pages/daform-one-collection/daform-one-collection.component';
import { ViewDaformComponent } from './pages/view-daform/view-daform.component';
import { FASearchComponent } from './pages/to remove/fa-search/fa-search.component';
import { DetailedDaformViewComponent } from './pages/to remove/detailed-daform-view/detailed-daform-view.component';
import { ViewFullDaformComponent } from './pages/view-full-daform/view-full-daform.component';
@NgModule({
  declarations: [
    AppComponent,
    FADAFormComponent,
    FADashbooardComponent,
    FASearchComponent,
    LandingComponent,
    DetailedDaformComponent,
    DetailedDaformViewComponent,
    MocReportComponent,
    MocReportsViewComponent,
    MessageBoardComponent,
    DAFormOneCollectionComponent,
    ViewDaformComponent,
    ViewFullDaformComponent
    
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
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
