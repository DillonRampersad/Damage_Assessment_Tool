import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaformfacserviceService {
  webReqService: any;

  constructor(private http: HttpClient) { }

  getDAFacForm() {
    return this.http.get<any>("http://localhost:3000/DAFacility")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOneDAFacForm(id: string) {
    return this.http.get<any>("http://localhost:3000/DAFacility/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postDAFacForm(data: any){
    return this.http.post<any>("http://localhost:3000/DAFacility", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateDAFacForm(data: any, id: string){
    return this.http.put<any>("http://localhost:3000/DAFacility/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteDAFacForm(id: string){
    return this.http.delete<any>("http://localhost:3000/DAFacility"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
