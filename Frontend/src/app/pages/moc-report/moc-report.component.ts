import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MOCReport } from 'src/app/models/mocreport.interface';

import { MOCReportService } from 'src/app/service/mocreport.service';

@Component({
  selector: 'app-moc-report',
  templateUrl: './moc-report.component.html',
  styleUrls: ['./moc-report.component.css']
})
export class MocReportComponent implements OnInit {

  constructor(private mocreportservice : MOCReportService, private router : Router) { }

  createMOCForm(facilityName: string, MoCDescription: string, MoCReportDateTimeString: string){

    const MoCReportDateTime = new Date(MoCReportDateTimeString);
    //const MoCDisasterLocation = Array[MoCDisasterLocationArray];
    this.mocreportservice.createMOCReport(facilityName, MoCDescription, MoCReportDateTime).subscribe((report : MOCReport)=>{
      console.log(report);
      //navigate to /damageAssessments/damageAssessments._id
      this.router.navigate(['/fa-dashboard'])
  })
  }

  ngOnInit(): void {
  }

}
