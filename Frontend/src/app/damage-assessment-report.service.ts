import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DamageAssessmentReportService {

  constructor(private webReqService: WebRequestService) { }

  createDAReport(assessmentDescription: string, author: string, reportDateTime: Date){
    //send web req to create DA report
    return this.webReqService.post('DamageAssessments', {assessmentDescription, author, reportDateTime})
  }

  createDAReportDetailsOrganizations(organizationName: string){
    //send web req to create DA report
    return this.webReqService.post('Organizations', {organizationName})
  }

  createDAReportDetailsFacilities(facilityName: string, facilityDamage: string){
    //send web req to create DA report
    return this.webReqService.post('Facilities', {facilityName, facilityDamage})
  }

  createDAReportDetailsEvents(eventName: string, eventDate: Date, area: string, surroundingDamage: string){
    //send web req to create DA report
    return this.webReqService.post('Events', {eventName, eventDate, area, surroundingDamage})
  }

  createDAReportDetailsDisasters(disasterNature: string, threatLevel: string){
    //send web req to create DA report
    return this.webReqService.post('Disasters', {disasterNature, threatLevel})
  }

  createDAReportDetailsEquipment(equipmentName: string, equipmentType: string, modelNumber: string, manufacturer: string, equipmentDamage: string){
    //send web req to create DA report
    return this.webReqService.post('Equipment', {equipmentName, equipmentType, modelNumber, manufacturer, equipmentDamage})
  }

  getDAReport(){
    return this.webReqService.get('DamageAssessments');
  }
}
