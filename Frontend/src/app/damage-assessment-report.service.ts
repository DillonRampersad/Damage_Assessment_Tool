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
}
