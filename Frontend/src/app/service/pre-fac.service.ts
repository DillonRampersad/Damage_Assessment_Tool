import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreFacService {
  webReqService: any;

  constructor(private http: HttpClient) { }

  getPreFacForm() {
    return this.http.get<any>("http://localhost:3000/PreFacility")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOnePreFacForm(id: string) {
    return this.http.get<any>("http://localhost:3000/PreFacility/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postPreFacForm(data: any){
    return this.http.post<any>("http://localhost:3000/PreFacility", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updatePreFacForm(data: any, id: string){
    return this.http.patch<any>("http://localhost:3000/PreFacility/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletePreFacForm(id: string){
    return this.http.delete<any>("http://localhost:3000/PreFacility/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

