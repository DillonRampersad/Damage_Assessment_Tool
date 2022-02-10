import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DamageAssessmentReportService {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private webReqService: WebRequestService
  ) { }

  createDAReport(assessmentDescription: string, author: string, reportDateTime: Date){
    //send web req to create DA report
    return this.webReqService.post('DamageAssessments', {assessmentDescription, author, reportDateTime})
  }

  createDAReportDetailsOrganizations(organizationName: string, OrgId: string){
    //send web req to create DA report
    return this.webReqService.post(`DamageAssessments/${ OrgId }/Organizations`, {organizationName})
  }

  createDAReportDetailsFacilities(facilityName: string, facilityDamage: string, FacId: string){
    //send web req to create DA report
    return this.webReqService.post(`DamageAssessments/${ FacId }/Facilities`, {facilityName, facilityDamage})
  }

  createDAReportDetailsEvents(eventName: string, eventDate: Date, area: string, surroundingDamage: string, EveId: string ){
    //send web req to create DA report
    return this.webReqService.post(`DamageAssessments/${ EveId }/Events`, {eventName, eventDate, area, surroundingDamage})
  }

  createDAReportDetailsDisasters(disasterNature: string, threatLevel: string, DisId: string){
    //send web req to create DA report
    return this.webReqService.post(`DamageAssessments/${ DisId }/Disasters`, {disasterNature, threatLevel})
  }

  createDAReportDetailsEquipment(equipmentName: string, equipmentType: string, modelNumber: string, manufacturer: string, equipmentDamage: string, EquId: string){
    //send web req to create DA report
    return this.webReqService.post(`DamageAssessments/${ EquId }/Equipment`, {equipmentName, equipmentType, modelNumber, manufacturer, equipmentDamage})
  }

  getDAReport(){
    return this.webReqService.get('DamageAssessments');
  }

  deleteDAReport(DAReportID: string){
    return this.webReqService.delete(`DamageAssessments/${DAReportID}`)
  }
}
