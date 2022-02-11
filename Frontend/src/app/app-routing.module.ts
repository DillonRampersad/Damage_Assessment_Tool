import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedDaformViewComponent } from './pages/detailed-daform-view/detailed-daform-view.component';
import { DetailedDaformComponent } from './pages/detailed-daform/detailed-daform.component';
import { FADAFormComponent } from './pages/fa-daform/fa-daform.component';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './pages/fa-search/fa-search.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';
import { MocReportComponent } from './pages/moc-report/moc-report.component';
import { MocReportsViewComponent } from './pages/moc-reports-view/moc-reports-view.component';



const routes: Routes = [
  {path: "detailed-daforms/:detailedDAFormId" , component: DetailedDaformComponent},
  {path: "" , redirectTo: "landing", pathMatch: 'full'},
  {path: "detailed-daform" , redirectTo: "detailed-daforms", pathMatch: 'full'},
  {path: "landing" , component: LandingComponent},
  {path: "fa-dashboard" , component: FADashbooardComponent},
  {path: "fa-daform" , component: FADAFormComponent},
  {path: "fa-search" , component: FASearchComponent},
  {path: "detailed-daforms" , component: DetailedDaformComponent},
  {path: "detailed-daform-view" , component: DetailedDaformViewComponent},
  {path: "moc-report" , component: MocReportComponent},
  {path: "moc-report-view" , component: MocReportsViewComponent},
  {path: "message-board" , component: MessageBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
