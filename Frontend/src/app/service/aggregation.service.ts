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


  //MOCReport
  noOfMocReports() {
    return this._http.get("http://localhost:3000/MOCReportCntRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfUnckMocReports() {
    return this._http.get("http://localhost:3000/MOCReportCntUnckRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  noOfCkMocReports() {
    return this._http.get("http://localhost:3000/MOCReportCntCkRpts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Post for damage DAFacilities
  postDAFacForm(facilityDamage: string){
    return this._http.post<any>("http://localhost:3000/DAFacilityDamage", {facilityDamage})
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //Post for damage DAEquipment
  postDAEquForm(equipmentDamage: string){
    return this._http.post<any>("http://localhost:3000/DAEquipmentDamage", {equipmentDamage})
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Post for damage MOC
  postMOCForm(MoCDescription: string){
    return this._http.post<any>("http://localhost:3000/MOCReportDamage", {MoCDescription})
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Post for damage message
  postMessageForm(message: string){
    return this._http.post<any>("http://localhost:3000/MessageData", {message})
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  //Charts
  Huawei() {
    return this._http.get("http://localhost:3000/Huawei")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Cisco() {
    return this._http.get("http://localhost:3000/Cisco")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Tele() {
    return this._http.get("http://localhost:3000/Tele")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  JN() {
    return this._http.get("http://localhost:3000/Juniper")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
