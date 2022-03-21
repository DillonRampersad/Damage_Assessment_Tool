import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';
import { MocReportComponent } from './pages/moc-report/moc-report.component';
import { MocReportsViewComponent } from './pages/moc-reports-view/moc-reports-view.component';
import { DmDashboardComponent } from './pages/dm-dashboard/dm-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DaformFacComponent } from './pages/daform-fac/daform-fac.component';
import { DaformFacViewComponent } from './pages/daform-fac-view/daform-fac-view.component';
import { DaformEquComponent } from './pages/daform-equ/daform-equ.component';
import { DaformEquViewComponent } from './pages/daform-equ-view/daform-equ-view.component';
import { DaformFacViewFullComponent } from './pages/daform-fac-view-full/daform-fac-view-full.component';
import { FaSignupComponent } from './pages/fa-signup/fa-signup.component';
import { FaSigninComponent } from './pages/fa-signin/fa-signin.component';
import { FaAuthGuard } from './auth/fa-auth.guard';
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
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  //{
  //  path: 'detailed-daform',
  //  redirectTo: 'detailed-daforms',
  //  pathMatch: 'full',
  //},
  { path: 'landing', component: LandingComponent },
  {
    path: 'fa-dashboard',
    component: FADashbooardComponent,
    //canActivate: [FaAuthGuard],
  },
  { path: 'moc-report', component: MocReportComponent },
  { path: 'updatemoc/:mocID', component: UpdateMocComponent },
  { path: 'moc-report-view', component: MocReportsViewComponent },

  { path: 'message-board', component: MessageBoardComponent },

  { path: 'daform-fac', component: DaformFacComponent },
  { path: 'daform-fac/:daformfacID', component: DaformFacComponent },
  { path: 'updatedaformfac/:facID', component: UpdatedaformfacComponent},
  { path: 'daform-fac-view', component: DaformFacViewComponent },
  {
    path: 'daform-fac-view-full/:facviewid',
    component: DaformFacViewFullComponent,
  },

  { path: 'daform-equ', component: DaformEquComponent },
  { path: 'daform-equ-view', component: DaformEquViewComponent },
  {
    path: 'daform-equ-view-full/:equviewid',
    component: DaformEquViewFullComponent,
  },
  
  { path: 'updatedaformequ/:equID', component: UpdatedaformequComponent},

  { path: 'dm-dashboard', component: DmDashboardComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },

  { path: 'fa-signup', component: FaSignupComponent },
  { path: 'fa-signin', component: FaSigninComponent },

  { path: 'dm-signup', component: DmSignupComponent },
  { path: 'dm-signin', component: DmSigninComponent },

  { path: 'a-signup', component: ASignupComponent },
  { path: 'a-signin', component: ASigninComponent },

  { path: 'moc-signup', component: MocSignupComponent },
  { path: 'moc-signin', component: MocSigninComponent },

  { path: 'preequ', component: PreEquComponent },
  { path: 'preequ-view', component: PreEquViewComponent },
  { path: 'preequ-view-full/:preequviewid', component: PreEquViewFullComponent },
  { path: 'updatepreequ/:equID', component: UpdatepreequComponent},

  { path: 'prefac', component: PreFacComponent },
  { path: 'prefac-view', component: PreFacViewComponent },
  { path: 'prefac-view-full/:preequviewid', component: PreFacViewFullComponent },
  { path: 'updateprefac/:facID', component: UpdateprefacComponent},

  { path: 'charts', component: ChartsComponent},

  { path: 'aggregate', component: AggregationComponent},

  { path: 'twitter', component: TwitterComponent},

  { path: 'ad-aggregate', component: AdAggregateComponent},
  { path: 'ad-charts', component: AdChartsComponent},
  { path: 'ad-daform-equ', component: AdDaformEquComponent},
  { path: 'ad-daform-equ-view', component: AdDaformEquViewComponent},
  { path: 'ad-daform-equ-view-full/:equviewid', component: AdDaformEquViewFullComponent},
  { path: 'ad-daform-fac', component: AdDaformFacComponent},
  { path: 'ad-daform-fac-view', component: AdDaformFacViewComponent},
  { path: 'ad-daform-fac-view-full/:facviewid', component: AdDaformFacViewFullComponent},
  { path: 'ad-message-board', component: AdMessageBoardComponent },
  { path: 'ad-moc-report', component: AdMocReportComponent },
  { path: 'ad-moc-report-view', component: AdMocReportViewComponent },
  { path: 'ad-preequ', component: AdPreEquComponent },
  { path: 'ad-preequ-view', component: AdPreEquViewComponent },
  { path: 'ad-preequ-view-full/:preequviewid', component: AdPreEquViewFullComponent },
  { path: 'ad-prefac', component: AdPreFacComponent },
  { path: 'ad-prefac-view', component: AdPreFacViewComponent },
  { path: 'ad-prefac-view-full/:preequviewid', component: AdPreFacViewFullComponent },
  { path: 'ad-twitter', component: AdTwitterComponent},
  { path: 'ad-updatemoc/:mocID', component: AdUpdateMocComponent },
  { path: 'ad-updatedaformequ/:equID', component: AdUpdatedaformequComponent},
  { path: 'ad-updatedaformfac/:facID', component: AdUpdatedaformfacComponent},
  { path: 'ad-updatepreequ/:equID', component: AdUpdatepreequComponent},
  { path: 'ad-updateprefac/:facID', component: AdUpdateprefacComponent},

  { path: 'map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
