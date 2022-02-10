import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamageAssessmentReportService } from 'src/app/damage-assessment-report.service';
import { Report } from '../../models/report.interface';

@Component({
  selector: 'app-fa-search',
  templateUrl: './fa-search.component.html',
  styleUrls: ['./fa-search.component.css']
})
export class FASearchComponent implements OnInit {

  constructor(private damageAssessmentReportService : DamageAssessmentReportService, private router: Router) { }

  
reports: Report[] = [
  {_id: "TestID", assessmentDescription: "Test Des", author: "Dillon", reportDateTime: new Date(2020, 9, 10)}
];

selectedDAReportID: string;

onDeleteDAReport(){
  this.damageAssessmentReportService.deleteDAReport(this.selectedDAReportID).subscribe((res: any) => {
  this.router.navigate(['/fa-search']);
  console.log(res)
  })
}

 

  ngOnInit(): void {
  this.damageAssessmentReportService.getDAReport().subscribe((DAReport: any)=>{
    this.reports= DAReport;

  })
  }

}
