import { Component, OnInit } from '@angular/core';
import { DamageAssessmentReportService } from 'src/app/damage-assessment-report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fa-daform',
  templateUrl: './fa-daform.component.html',
  styleUrls: ['./fa-daform.component.css']
})
export class FADAFormComponent implements OnInit {


  constructor(private damageAssessmentReportService : DamageAssessmentReportService, private router: Router) { }
  
  //assessmentDescription: string, author: string, reportDateTime: Date
  

  createDamageAssessmentReport(assessmentDescription: string, author: string, reportDateString: string){

    const reportDateTime = new Date(reportDateString);
    this.damageAssessmentReportService.createDAReport(assessmentDescription,author, reportDateTime).subscribe((response : any)=>{
      console.log(response);
      //navigate to /damageAssessments/damageAssessments._id
      this.router.navigateByUrl(`detailed-daforms/${response._id}`)
  })
  }

  
  ngOnInit(): void {
  }

  }

