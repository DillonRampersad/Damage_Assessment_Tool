import { Component, OnInit, ViewChild } from '@angular/core';
import { MOCReportService } from 'src/app/service/mocreport.service';

import { MatAccordion } from '@angular/material/expansion';
import { MOCReport } from 'src/app/models/mocreport.interface';

@Component({
  selector: 'app-moc-reports-view',
  templateUrl: './moc-reports-view.component.html',
  styleUrls: ['./moc-reports-view.component.css'],
})
export class MocReportsViewComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

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

  mocreports: MOCReport[];

  imageData: string;

  ngOnInit(): void {
    this.mocreportservice.getMOCReport().subscribe((mocReport: MOCReport[]) => {
      this.mocreports = mocReport;
    });
  }
}
