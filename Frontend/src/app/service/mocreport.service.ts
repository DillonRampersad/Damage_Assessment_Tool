import { Injectable } from '@angular/core';
import { MOCReport } from '../models/mocreport.interface';
import { WebRequestService } from './web-request.service';

import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MOCReportService {
  private MocReports: MOCReport[] = [];
  private MocReports$ = new Subject<MOCReport[]>();
  readonly url = "http://localhost:3000/MOCReport";

  constructor(private webReqService: WebRequestService, private http: HttpClient) { }

  getMOCForm() {
    return this.http.get<any>("http://localhost:3000/MOCReport")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postMOCForm(data: any){
    return this.http.post<any>("http://localhost:3000/MOCReport", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMOCForm(data: any, id: string){
    return this.http.put<any>("http://localhost:3000/MOCReport"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMOCForm(id: number){
    return this.http.delete<any>("http://localhost:3000/MOCReport"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMOCFormStream() {
    return this.MocReports$.asObservable();
  }


  ///////////////////////////////////////////
  createMOCReport(facilityName: string, MoCDescription: string, MoCReportDateTime: Date, mocImage: File){
    //send web req to create DA report
    return this.webReqService.post('MOCReport', {facilityName, MoCDescription, MoCReportDateTime, mocImage})
  }

  getMOCReport(){
    return this.webReqService.get('MOCReport');
  }
}
