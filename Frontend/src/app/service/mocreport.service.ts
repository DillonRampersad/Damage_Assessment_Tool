import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MOCReportService {

  constructor(private webReqService: WebRequestService) { }

  createMOCReport(facilityName: string, MoCDescription: string, MoCReportDateTime: Date){
    //send web req to create DA report
    return this.webReqService.post('MOCReport', {facilityName, MoCDescription, MoCReportDateTime})
  }

  getMOCReport(){
    return this.webReqService.get('MOCReport');
  }
}
