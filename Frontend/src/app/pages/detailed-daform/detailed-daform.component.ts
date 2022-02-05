import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DamageAssessmentReportService } from 'src/app/damage-assessment-report.service';

@Component({
  selector: 'app-detailed-daform',
  templateUrl: './detailed-daform.component.html',
  styleUrls: ['./detailed-daform.component.css']
})
export class DetailedDaformComponent implements OnInit {

  damageAssessments: any;

  constructor(private damageAssessmentReportService: DamageAssessmentReportService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        console.log(params);
      }
    )
    this.damageAssessmentReportService.getDAReport().subscribe((damageAssessments: any)=> {
        console.log(damageAssessments);
    });
  }
}