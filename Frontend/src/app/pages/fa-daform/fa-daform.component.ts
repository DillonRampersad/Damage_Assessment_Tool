import { Component, OnInit } from '@angular/core';
import { DamageAssessmentReportService } from 'src/app/damage-assessment-report.service';

@Component({
  selector: 'app-fa-daform',
  templateUrl: './fa-daform.component.html',
  styleUrls: ['./fa-daform.component.css']
})
export class FADAFormComponent implements OnInit {

  constructor(private damageAssessmentReportService : DamageAssessmentReportService) { }
  
  //assessmentDescription: string, author: string, reportDateTime: Date
  createNewDAReport(){
    this.damageAssessmentReportService.createDAReport("New Report","Dillon", new Date(2020, 9, 10)).subscribe((response : any)=>{
      console.log(response);

    })
  }

  createDamageAssessmentReport(assessmentDescription: string, author: string, reportDateTime: Date){
    this.damageAssessmentReportService.createDAReport("New Report","Dillon", new Date(2020, 9, 10)).subscribe((response : any)=>{
      console.log(response);
  })
  }

  ngOnInit(): void {
  }

  }

