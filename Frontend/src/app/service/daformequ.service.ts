import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DAFormEqu } from '../models/daformequ.interface'

@Injectable({
  providedIn: 'root'
})
export class DaformequService {
  webReqService: any;

  constructor(private http: HttpClient) { }

  getDAEquForm() {
    return this.http.get<any>("http://localhost:3000/DAEquipment")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOneDAEquForm(id: string) {
    return this.http.get<any>("http://localhost:3000/DAEquipment/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postDAEquForm(data: any){
    return this.http.post<any>("http://localhost:3000/DAEquipment", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateDAEquForm(data: any, id: string){
    return this.http.patch<any>("http://localhost:3000/DAEquipment/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteDAEquForm(id: string){
    return this.http.delete<any>("http://localhost:3000/DAEquipment/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
