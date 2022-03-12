import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Chart, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private _http: HttpClient) {
    Chart.register(...registerables)
    //Chart.register(ChartDataLabels);
   }
  
  noOfEqu() {
    return this._http.get("http://localhost:3000/DAFacility")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

