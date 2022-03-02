import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MOCReportService } from 'src/app/service/mocreport.service';

import { MatAccordion } from '@angular/material/expansion';
import { MOCReport } from 'src/app/models/mocreport.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moc-reports-view',
  templateUrl: './moc-reports-view.component.html',
  styleUrls: ['./moc-reports-view.component.css'],
})
//, OnDestroy
export class MocReportsViewComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  mocreports: MOCReport[] = [];
  private MOCReportSubscription: Subscription;

  constructor(
    private mocreportservice: MOCReportService,
    private router: Router
  ) {}

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

  delete(id){
    console.log(id);
    this.mocreportservice.deleteMOCForm(id).subscribe((res)=>{
      console.log(res);
    });
    window .location.reload();
  }


  ngOnInit(): void {
    this.mocreportservice.getMOCForm().subscribe((mocReport: MOCReport[]) => {
      this.mocreports = mocReport;
    });
  }

  //ngOnDestroy(){
  //  this.MOCReportSubscription.unsubscribe();
  //}
}
