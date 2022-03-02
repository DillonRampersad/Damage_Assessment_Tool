import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { MOCReport } from '../models/mocreport.interface';

@Injectable({
  providedIn: 'root'
})
export class MOCReportService {
  private mocreport: MOCReport;

  constructor(private http: HttpClient) { }

  getMOCForm() {
    return this.http.get<any>("http://localhost:3000/MOCReport")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOneMOCForm(id: string) {
    return this.http.get<any>("http://localhost:3000/MOCReport/"+id)
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
    return this.http.patch<any>("http://localhost:3000/MOCReport/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMOCForm(id: string){
    return this.http.delete<any>("http://localhost:3000/MOCReport/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  setter(mocreport: MOCReport)
  {
    this.mocreport=mocreport;
  }

  getter(){
    return this.mocreport;
  }

}
