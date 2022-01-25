import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaDaWebformComponent } from './fa-da-webform/fa-da-webform.component';
import { FADAFormComponent } from './fa-daform/fa-daform.component';

const routes: Routes = [
  {path: "" , component: FADAFormComponent},
  {path: "fa-da-webform" , component: FaDaWebformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
