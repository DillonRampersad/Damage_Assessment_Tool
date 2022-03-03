import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PreEqu } from '../models/preEqu.interface'

@Injectable({
  providedIn: 'root'
})
export class PreEquService {
  webReqService: any;

  constructor(private http: HttpClient) { }

  getPreEquForm() {
    return this.http.get<any>("http://localhost:3000/PreEquipment")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOnePreEquForm(id: string) {
    return this.http.get<any>("http://localhost:3000/PreEquipment/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postPreEquForm(data: any){
    return this.http.post<any>("http://localhost:3000/PreEquipment", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updatePreEquForm(data: any, id: string){
    return this.http.patch<any>("http://localhost:3000/PreEquipment/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletePreEquForm(id: string){
    return this.http.delete<any>("http://localhost:3000/PreEquipment/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
