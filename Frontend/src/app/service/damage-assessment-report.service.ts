import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DamageAssessmentReportService {

  constructor(
    private webReqService: WebRequestService
  ) { }


  createDAForm(
    author1: string, 
    organizationName1: string, 
    facilityName1: string, 
    facilityDamage1: string, 
    eventName1: string, 
    eventDate1: Date, 
    area1: string, 
    surroundingDamage1: string, 
    disasterNature1: string, 
    threatLevel1:string,
    equipmentName1: string, 
    equipmentType1: string, 
    modelNumber1: string, 
    manufacturer1: string, 
    equipmentDamage1: string,){
    //send web req to create DA report
    return this.webReqService.post('DamageAssessmentForm', {
      author1, 
      organizationName1, 
      facilityName1, 
      facilityDamage1, 
      eventName1, 
      eventDate1, 
      area1, 
      surroundingDamage1, 
      disasterNature1, 
      threatLevel1,
      equipmentName1, 
      equipmentType1, 
      modelNumber1, 
      manufacturer1, 
      equipmentDamage1})
  }
//location1: Array,

  getDAForm(){
    return this.webReqService.get('DamageAssessmentForm');
  }

  getOneDAForm(getDAId: any):Observable<any>
  {
    return this.webReqService.get(`DamageAssessmentForm/${getDAId}`);
  }

  deleteDAForm(DAFormID: string){
    return this.webReqService.delete(`DamageAssessmentForm/${DAFormID}`)
  }

////////////////////////////////////////////////////////////////////////////////////////////////
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

  getDAReportDetailsOrganizations(OrgDetId: string){
    //send web req to create DA report
    return this.webReqService.get(`DamageAssessments/${ OrgDetId }/Organizations`);
  }

  deleteDAReport(DAReportID: string){
    return this.webReqService.delete(`DamageAssessments/${DAReportID}`)
  }
}
