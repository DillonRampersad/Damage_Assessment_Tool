import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class MessageBoardService {

  constructor(private webReqService: WebRequestService) { }

  //createMessage(facilityName: string, MoCDescription: string, MoCReportDateTime: Date){
    //send web req to create DA report
  //  return this.webReqService.post('MOCReport', {facilityName, MoCDescription, MoCReportDateTime})
  //}

  //getMessage(){
  //  return this.webReqService.get('MOCReport');
  //}
}
