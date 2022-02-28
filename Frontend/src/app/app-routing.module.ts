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


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'detailed-daform',
    redirectTo: 'detailed-daforms',
    pathMatch: 'full',
  },
  { path: 'landing', component: LandingComponent },
  { path: 'fa-dashboard', component: FADashbooardComponent, canActivate:[FaAuthGuard] },
  { path: 'moc-report', component: MocReportComponent },
  { path: 'moc-report-view', component: MocReportsViewComponent },
  { path: 'message-board', component: MessageBoardComponent },
  { path: 'daform-fac', component: DaformFacComponent },
  { path: 'daform-fac-view', component: DaformFacViewComponent },
  { path: 'daform-fac-view-full/:facviewid', component: DaformFacViewFullComponent},
  { path: 'daform-equ', component: DaformEquComponent },
  { path: 'daform-equ-view', component: DaformEquViewComponent },
  { path: 'dm-dashboard', component: DmDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'fa-signup', component: FaSignupComponent},
  { path: 'fa-signin', component: FaSigninComponent},
  { path: 'dm-signup', component: DmSignupComponent},
  { path: 'dm-signin', component: DmSigninComponent},
  { path: 'a-signup', component: ASignupComponent},
  { path: 'a-signin', component: ASigninComponent},
  { path: 'moc-signup', component: MocSignupComponent},
  { path: 'moc-signin', component: MocSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
