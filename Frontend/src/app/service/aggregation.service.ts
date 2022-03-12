import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AggregationService {

  constructor(private _http: HttpClient) { }

  //Facility
  noOfDAFacReports() {
    return this._http.get("http://localhost:3000/DAFacilityCntRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfUnckDAFacReports() {
    return this._http.get("http://localhost:3000/DAFacilityCntUnckRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfCkDAFacReports() {
    return this._http.get("http://localhost:3000/DAFacilityCntCkRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Equipment
  noOfDAEquReports() {
    return this._http.get("http://localhost:3000/DAEquipmentCntRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfUnckDAEquReports() {
    return this._http.get("http://localhost:3000/DAEquipmentCntUnckRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfCkDAEquReports() {
    return this._http.get("http://localhost:3000/DAEquipmentCntCkRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
