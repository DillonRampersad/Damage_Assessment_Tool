import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DAFormOneCollectionComponent } from './pages/daform-one-collection/daform-one-collection.component';
import { DetailedDaformComponent } from './pages/to remove/detailed-daform/detailed-daform.component';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';
import { MocReportComponent } from './pages/moc-report/moc-report.component';
import { MocReportsViewComponent } from './pages/moc-reports-view/moc-reports-view.component';
import { ViewDaformComponent } from './pages/view-daform/view-daform.component';
import { FADAFormComponent } from './pages/to remove/fa-daform/fa-daform.component';
import { FASearchComponent } from './pages/to remove/fa-search/fa-search.component';
import { DetailedDaformViewComponent } from './pages/to remove/detailed-daform-view/detailed-daform-view.component';
import { ViewFullDaformComponent } from './pages/view-full-daform/view-full-daform.component';
import { DmDashboardComponent } from './pages/dm-dashboard/dm-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'detailed-daforms/:detailedDAFormId',
    component: DetailedDaformComponent,
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'detailed-daform',
    redirectTo: 'detailed-daforms',
    pathMatch: 'full',
  },
  { path: 'landing', component: LandingComponent },
  { path: 'fa-dashboard', component: FADashbooardComponent },
  { path: 'fa-daform', component: FADAFormComponent },
  { path: 'fa-search', component: FASearchComponent },
  { path: 'detailed-daforms', component: DetailedDaformComponent },
  { path: 'detailed-daform-view', component: DetailedDaformViewComponent },
  { path: 'moc-report', component: MocReportComponent },
  { path: 'moc-report-view', component: MocReportsViewComponent },
  { path: 'message-board', component: MessageBoardComponent },
  { path: 'daform', component: DAFormOneCollectionComponent },
  { path: 'view-daform', component: ViewDaformComponent },
  {
    path: 'view-full-daform/:viewfulldaformid',
    component: ViewFullDaformComponent,
  },
  { path: 'dm-dashboard', component: DmDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
