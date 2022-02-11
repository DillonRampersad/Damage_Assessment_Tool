import { Component, OnInit } from '@angular/core';
import { MOCReportService } from 'src/app/service/mocreport.service';
import { MOCReport } from 'src/app/models/mocreport.interface';

@Component({
  selector: 'app-moc-reports-view',
  templateUrl: './moc-reports-view.component.html',
  styleUrls: ['./moc-reports-view.component.css']
})
export class MocReportsViewComponent implements OnInit {

  constructor(private mocreportservice: MOCReportService) { }

  mocreports : MOCReport[]

  ngOnInit(): void {
  
  this.mocreportservice.getMOCReport().subscribe((mocReport: MOCReport[])=>{
    this.mocreports= mocReport;
  
  })
}
}
