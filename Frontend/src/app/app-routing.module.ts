import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaDaWebformComponent } from './fa-da-webform/fa-da-webform.component';
import { FADAFormComponent } from './fa-daform/fa-daform.component';
import { FADashbooardComponent } from './fa-dashbooard/fa-dashbooard.component';
import { FASearchComponent } from './fa-search/fa-search.component';




const routes: Routes = [
  {path: "" , component: FADashbooardComponent},
  {path: "fa-daform" , component: FADAFormComponent},
  {path: "fa-daform/fa-da-webform" , component: FaDaWebformComponent},
  {path: "fa-search" , component: FASearchComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
