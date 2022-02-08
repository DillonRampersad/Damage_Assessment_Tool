import { Component, OnInit } from '@angular/core';
import { DamageAssessmentReportService } from 'src/app/damage-assessment-report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-daform',
  templateUrl: './detailed-daform.component.html',
  styleUrls: ['./detailed-daform.component.css']
})
export class DetailedDaformComponent implements OnInit {

  damageAssessments: any;

  constructor(private damageAssessmentReportService: DamageAssessmentReportService, private router: Router) { }

  createDamageAssessmentReportDetails(organizationName: string, facilityName: string, facilityDamage: string, 
    eventName: string, eventDateString: string, area: string, surroundingDamage: string, disasterNature: string, 
    threatLevel: string, equipmentName: string, equipmentType: string, modelNumber: string, manufacturer: string, 
    equipmentDamage: string){

    const eventDate = new Date(eventDateString);

    this.damageAssessmentReportService.createDAReportDetailsOrganizations(organizationName).subscribe((responseOrg : any)=>{
      console.log(responseOrg);      
    })
    this.damageAssessmentReportService.createDAReportDetailsFacilities(facilityName, facilityDamage).subscribe((responseFac : any)=>{
      console.log(responseFac);      
    })
    this.damageAssessmentReportService.createDAReportDetailsEvents(eventName, eventDate, area, surroundingDamage).subscribe((responseEve : any)=>{
      console.log(responseEve);      
    })
    this.damageAssessmentReportService.createDAReportDetailsDisasters(disasterNature, threatLevel).subscribe((responseDis : any)=>{
      console.log(responseDis);      
    })
    this.damageAssessmentReportService.createDAReportDetailsEquipment(equipmentName, equipmentType, modelNumber, manufacturer, equipmentDamage).subscribe((responseEqu : any)=>{
      console.log(responseEqu);      
    })


    this.router.navigateByUrl(`fa-dashboard`)
  }

  ngOnInit() {
  //  this.route.params.subscribe(
  //    (params: Params)=>{
  //      console.log(params);
  //    }
  //  )
  //  this.damageAssessmentReportService.getDAReport().subscribe((damageAssessments: any)=> {
  //      console.log(damageAssessments);
  //  });
  }
}