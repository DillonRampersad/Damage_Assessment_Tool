import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { Subscription } from 'rxjs';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daform-fac-view',
  templateUrl: './daform-fac-view.component.html',
  styleUrls: ['./daform-fac-view.component.css']
})
export class DaformFacViewComponent implements OnInit {
@ViewChild(MatAccordion) accordion: MatAccordion;
daformfac: DAFormFac[] = [];

constructor(private daformfacservice: DaformfacserviceService, private router: Router) {}


step = 0;

setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
}

prevStep() {
  this.step--;
}

onUpdate(daformfacs)
{
}

delete(id){
  console.log(id);
  this.daformfacservice.deleteDAFacForm(id).subscribe((res)=>{
    console.log(res);
  });
  window .location.reload();
}



ngOnInit(): void {
  this.daformfacservice.getDAFacForm().subscribe((daFormFac: DAFormFac[]) => {
    this.daformfac = daFormFac;
  });
}

}