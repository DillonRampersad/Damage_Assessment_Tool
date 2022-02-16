import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DAForm } from 'src/app/models/daform.interface';
import { DamageAssessmentReportService } from 'src/app/service/damage-assessment-report.service';

@Component({
  selector: 'app-view-full-daform',
  templateUrl: './view-full-daform.component.html',
  styleUrls: ['./view-full-daform.component.css']
})
export class ViewFullDaformComponent implements OnInit {

  daform: DAForm[] = [
    {
      _id: 'Test ID',
      author1: 'Test Author',
      organizationName1: 'Test Organization Name',
      facilityName1: 'Test Facility Name',
      facilityDamage1: 'Test Facility Damage',
      eventName1: 'Test Event Name',
      eventDate1: new Date(2020, 9, 10),
      area1: 'Test Area',
      surroundingDamage1: 'Test Surrounding Damage',
      disasterNature1: 'Test Disaster Nature',
      threatLevel1: 'Test Threat Level',
      equipmentName1: 'Test Equipment Name',
      equipmentType1: 'Test Equipment Type',
      modelNumber1: 'Test Model No',
      manufacturer1: 'Test Manufacturer',
      equipmentDamage1: 'Test Equipment Damage',
    }
  ];
  
  formID: string;
  getparamformid: any;
  formDetails: any;
  
  constructor(private damageAssessmentService: DamageAssessmentReportService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('viewfulldaformid'),' : ID of report')
    this.getparamformid = this.route.snapshot.paramMap.get('viewfulldaformid');
    this.damageAssessmentService.getOneDAForm(this.getparamformid).subscribe((FormIdentification: DAForm[])=> {
      this.formDetails = FormIdentification;
      console.log(FormIdentification, "response of form");
    })
  }
}
