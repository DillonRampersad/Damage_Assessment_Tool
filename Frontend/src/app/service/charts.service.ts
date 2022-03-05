import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private _http: HttpClient) { }
  
  noOfEqu() {
    return this._http.get("http://localhost:3000/DAFacility")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
