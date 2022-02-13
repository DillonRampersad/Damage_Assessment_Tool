import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet'

@Injectable({
  providedIn: 'root'
})
export class MocMapService {

  baseURL: string = 'http://localhost:3000/MOCReport';
  constructor(private webReqService: WebRequestService, private http: HttpClient) { }

  getMarkers(map: L.map): void {
    this.http.get(this.baseURL).subscribe((res: any)=> {

      for (const c of res){
        const lat = c.MoCDisasterLocation[0];
        const lon = c.MoCDisasterLocation[1];
        var marker = L.marker([lon, lat], {draggable: true}).addTo(map);
        marker.bindPopup(`<center><p><strong>${c.facilityName}</strong></p></center>`+ marker.getLatLng()).openPopup();
      }
    });
  }
}
