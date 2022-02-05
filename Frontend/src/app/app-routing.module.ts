import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedDaformComponent } from './pages/detailed-daform/detailed-daform.component';
import { FADAFormComponent } from './pages/fa-daform/fa-daform.component';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './pages/fa-search/fa-search.component';
import { LandingComponent } from './pages/landing/landing.component';




const routes: Routes = [
  {path: "" , redirectTo: "landing", pathMatch: 'full'},
  {path: "detailed-daform" , redirectTo: "detailed-daforms", pathMatch: 'full'},
  {path: "landing" , component: LandingComponent},
  {path: "fa-dashboard" , component: FADashbooardComponent},
  {path: "fa-daform" , component: FADAFormComponent},
  {path: "fa-search" , component: FASearchComponent},
  {path: "detailed-daforms" , component: DetailedDaformComponent},
  {path: "detailed-daforms/:detailedDAFormId" , component: DetailedDaformComponent}
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
