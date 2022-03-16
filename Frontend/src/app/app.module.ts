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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
////////////////////////////////////////////////////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { MocReportComponent } from './pages/moc-report/moc-report.component';
import { MocReportsViewComponent } from './pages/moc-reports-view/moc-reports-view.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';
import { DmDashboardComponent } from './pages/dm-dashboard/dm-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DaformFacComponent } from './pages/daform-fac/daform-fac.component';
import { DaformFacViewComponent } from './pages/daform-fac-view/daform-fac-view.component';
import { DaformEquComponent } from './pages/daform-equ/daform-equ.component';
import { DaformEquViewComponent } from './pages/daform-equ-view/daform-equ-view.component';
import { DaformFacViewFullComponent } from './pages/daform-fac-view-full/daform-fac-view-full.component';
import { FaSignupComponent } from './pages/fa-signup/fa-signup.component';
import { FaSigninComponent } from './pages/fa-signin/fa-signin.component';
import { FaSignupService } from './service/fa-signup.service';

import { FaAuthGuard } from './auth/fa-auth.guard';
import { AuthInterceptor } from './auth/fa-auth.interceptor';
import { DmSignupComponent } from './pages/dm-signup/dm-signup.component';
import { DmSigninComponent } from './pages/dm-signin/dm-signin.component';
import { ASigninComponent } from './pages/a-signin/a-signin.component';
import { ASignupComponent } from './pages/a-signup/a-signup.component';
import { MocSignupComponent } from './pages/moc-signup/moc-signup.component';
import { MocSigninComponent } from './pages/moc-signin/moc-signin.component';
import { UpdateMocComponent } from './pages/update-moc/update-moc.component';
import { DaformEquViewFullComponent } from './pages/daform-equ-view-full/daform-equ-view-full.component';
import { PreEquComponent } from './pages/pre-equ/pre-equ.component';
import { PreEquViewComponent } from './pages/pre-equ-view/pre-equ-view.component';
import { PreEquViewFullComponent } from './pages/pre-equ-view-full/pre-equ-view-full.component';
import { PreFacComponent } from './pages/pre-fac/pre-fac.component';
import { PreFacViewComponent } from './pages/pre-fac-view/pre-fac-view.component';
import { PreFacViewFullComponent } from './pages/pre-fac-view-full/pre-fac-view-full.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChartsService } from './service/charts.service';
import { AggregationComponent } from './pages/aggregation/aggregation.component';
import { UpdatedaformfacComponent } from './pages/updatedaformfac/updatedaformfac.component';
import { UpdatedaformequComponent } from './pages/updatedaformequ/updatedaformequ.component';
import { UpdateprefacComponent } from './pages/updateprefac/updateprefac.component';
import { UpdatepreequComponent } from './pages/updatepreequ/updatepreequ.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
import { AdAggregateComponent } from './pages/ad-aggregate/ad-aggregate.component';
import { AdChartsComponent } from './pages/ad-charts/ad-charts.component';
import { AdDaformEquComponent } from './pages/ad-daform-equ/ad-daform-equ.component';
import { AdDaformEquViewComponent } from './pages/ad-daform-equ-view/ad-daform-equ-view.component';
import { AdDaformEquViewFullComponent } from './pages/ad-daform-equ-view-full/ad-daform-equ-view-full.component';
import { AdDaformFacComponent } from './pages/ad-daform-fac/ad-daform-fac.component';
import { AdDaformFacViewComponent } from './pages/ad-daform-fac-view/ad-daform-fac-view.component';
import { AdDaformFacViewFullComponent } from './pages/ad-daform-fac-view-full/ad-daform-fac-view-full.component';
import { AdMessageBoardComponent } from './pages/ad-message-board/ad-message-board.component';
import { AdMocReportComponent } from './pages/ad-moc-report/ad-moc-report.component';
import { AdMocReportViewComponent } from './pages/ad-moc-report-view/ad-moc-report-view.component';
import { AdPreEquComponent } from './pages/ad-pre-equ/ad-pre-equ.component';
import { AdPreEquViewComponent } from './pages/ad-pre-equ-view/ad-pre-equ-view.component';
import { AdPreEquViewFullComponent } from './pages/ad-pre-equ-view-full/ad-pre-equ-view-full.component';
import { AdPreFacComponent } from './pages/ad-pre-fac/ad-pre-fac.component';
import { AdPreFacViewComponent } from './pages/ad-pre-fac-view/ad-pre-fac-view.component';
import { AdPreFacViewFullComponent } from './pages/ad-pre-fac-view-full/ad-pre-fac-view-full.component';
import { AdTwitterComponent } from './pages/ad-twitter/ad-twitter.component';
import { AdUpdateMocComponent } from './pages/ad-update-moc/ad-update-moc.component';
import { AdUpdatedaformequComponent } from './pages/ad-updatedaformequ/ad-updatedaformequ.component';
import { AdUpdatedaformfacComponent } from './pages/ad-updatedaformfac/ad-updatedaformfac.component';
import { AdUpdatepreequComponent } from './pages/ad-updatepreequ/ad-updatepreequ.component';
import { AdUpdateprefacComponent } from './pages/ad-updateprefac/ad-updateprefac.component';

@NgModule({
  declarations: [
    AppComponent,
    FADashbooardComponent,
    LandingComponent,
    MocReportComponent,
    MocReportsViewComponent,
    MessageBoardComponent,
    DmDashboardComponent,
    AdminDashboardComponent,
    DaformFacComponent,
    DaformFacViewComponent,
    DaformEquComponent,
    DaformEquViewComponent,
    DaformFacViewFullComponent,
    FaSignupComponent,
    FaSigninComponent,
    DmSignupComponent,
    DmSigninComponent,
    ASigninComponent,
    ASignupComponent,
    MocSignupComponent,
    MocSigninComponent,
    UpdateMocComponent,
    DaformEquViewFullComponent,
    PreEquComponent,
    PreEquViewComponent,
    PreEquViewFullComponent,
    PreFacComponent,
    PreFacViewComponent,
    PreFacViewFullComponent,
    ChartsComponent,
    AggregationComponent,
    UpdatedaformfacComponent,
    UpdatedaformequComponent,
    UpdateprefacComponent,
    UpdatepreequComponent,
    TwitterComponent,
    AdAggregateComponent,
    AdChartsComponent,
    AdDaformEquComponent,
    AdDaformEquViewComponent,
    AdDaformEquViewFullComponent,
    AdDaformFacComponent,
    AdDaformFacViewComponent,
    AdDaformFacViewFullComponent,
    AdMessageBoardComponent,
    AdMocReportComponent,
    AdMocReportViewComponent,
    AdPreEquComponent,
    AdPreEquViewComponent,
    AdPreEquViewFullComponent,
    AdPreFacComponent,
    AdPreFacViewComponent,
    AdPreFacViewFullComponent,
    AdTwitterComponent,
    AdUpdateMocComponent,
    AdUpdatedaformequComponent,
    AdUpdatedaformfacComponent,
    AdUpdatepreequComponent,
    AdUpdateprefacComponent,
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
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    FaAuthGuard,
    FaSignupService,
    ChartsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
