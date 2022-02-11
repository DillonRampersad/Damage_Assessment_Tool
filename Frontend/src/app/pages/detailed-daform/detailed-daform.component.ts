import { Component, OnInit } from '@angular/core';
import { DamageAssessmentReportService } from 'src/app/service/damage-assessment-report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationsInt } from 'src/app/models/organizations.interface';
import { FacilitiesInt } from 'src/app/models/facilities.interface';
import { EventsInt } from 'src/app/models/events.interface';
import { DisastersInt } from 'src/app/models/disasters.interface';
import { EquipmentInt } from 'src/app/models/equipment.interface';

@Component({
  selector: 'app-detailed-daform',
  templateUrl: './detailed-daform.component.html',
  styleUrls: ['./detailed-daform.component.css']
})
export class DetailedDaformComponent implements OnInit {

  damageAssessments: any;
  detailedDAFormId: string;

  constructor(
    private damageAssessmentReportService: DamageAssessmentReportService, 
    private router: Router, 
    private readonly activatedRoute: ActivatedRoute) { }

  createDamageAssessmentReportDetails(organizationName: string, facilityName: string, facilityDamage: string, 
    eventName: string, eventDateString: string, area: string, surroundingDamage: string, disasterNature: string, 
    threatLevel: string, equipmentName: string, equipmentType: string, modelNumber: string, manufacturer: string, 
    equipmentDamage: string){

    const eventDate = new Date(eventDateString);

    //const id = this.activatedRoute.snapshot.paramMap.get('detailedDAFormId') as string;
    //console.log(this.activatedRoute.snapshot.paramMap);

    this.damageAssessmentReportService.createDAReportDetailsOrganizations(organizationName, this.detailedDAFormId).subscribe((responseOrg : OrganizationsInt)=>{
      console.log(responseOrg);      
    })
    this.damageAssessmentReportService.createDAReportDetailsFacilities(facilityName, facilityDamage, this.detailedDAFormId).subscribe((responseFac : FacilitiesInt)=>{
      console.log(responseFac);      
    })
    this.damageAssessmentReportService.createDAReportDetailsEvents(eventName, eventDate, area, surroundingDamage, this.detailedDAFormId).subscribe((responseEve : EventsInt)=>{
      console.log(responseEve);      
    })
    this.damageAssessmentReportService.createDAReportDetailsDisasters(disasterNature, threatLevel, this.detailedDAFormId).subscribe((responseDis : DisastersInt)=>{
      console.log(responseDis);      
    })
    this.damageAssessmentReportService.createDAReportDetailsEquipment(equipmentName, equipmentType, modelNumber, manufacturer, equipmentDamage, this.detailedDAFormId).subscribe((responseEqu : EquipmentInt)=>{
      console.log(responseEqu);      
    })


    this.router.navigateByUrl(`fa-dashboard`)
  }

  ngOnInit() {

    this.detailedDAFormId = this.activatedRoute.snapshot.paramMap.get('detailedDAFormId') as string;
  }
}