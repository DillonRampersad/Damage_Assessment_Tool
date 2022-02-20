import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MOCReportService } from 'src/app/service/mocreport.service';

import { MatAccordion } from '@angular/material/expansion';
import { MOCReport } from 'src/app/models/mocreport.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moc-reports-view',
  templateUrl: './moc-reports-view.component.html',
  styleUrls: ['./moc-reports-view.component.css'],
})
export class MocReportsViewComponent implements OnInit
//, OnDestroy 
{
  @ViewChild(MatAccordion) accordion: MatAccordion;


  
  mocreports: MOCReport[] = [];
  private MOCReportSubscription: Subscription;

  constructor(private mocreportservice: MOCReportService) {}
  
  
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



  ngOnInit(): void {
    this.mocreportservice.getMOCReport().subscribe((mocReport: MOCReport[]) => {
      this.mocreports = mocReport;
    });

    //this.mocreportservice.getMOCForm();
    //this.MOCReportSubscription = this.mocreportservice
    //  .getMOCFormStream()
    //  .subscribe((mocreports: MOCReport[]) => {
    //    this.mocreports = mocreports;
    //  });
  }
  //ngOnDestroy(): void {
  //  this.MOCReportSubscription.unsubscribe();
  //}
  
  
}



