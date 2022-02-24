import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MOCReportService {

  constructor(private http: HttpClient) { }

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

}
