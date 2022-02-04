import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FADAFormComponent } from './pages/fa-daform/fa-daform.component';
import { FADashbooardComponent } from './pages/fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './pages/fa-search/fa-search.component';
import { LandingComponent } from './pages/landing/landing.component';




const routes: Routes = [
  {path: "" , component: LandingComponent},
  {path: "fa-dashboard" , component: FADashbooardComponent},
  {path: "fa-daform" , component: FADAFormComponent},
  {path: "fa-search" , component: FASearchComponent},
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
