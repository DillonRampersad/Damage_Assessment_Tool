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
    this.http
      .get<{ MocReports: MOCReport[] }>(this.url)
      .pipe(
        map((MocReportsData) => {
          return MocReportsData.MocReports;
        })
      )
      .subscribe((MocReports) => {
        this.MocReports = MocReports;
        this.MocReports$.next(this.MocReports);
      });
  }

  getMOCFormStream() {
    return this.MocReports$.asObservable();
  }


  ///////////////////////////////////////////
  createMOCReport(facilityName: string, MoCDescription: string, MoCReportDateTime: Date, mocImage: any){
    //send web req to create DA report
    return this.webReqService.post('MOCReport', {facilityName, MoCDescription, MoCReportDateTime, mocImage})
  }

  getMOCReport(){
    return this.webReqService.get('MOCReport');
  }
}
