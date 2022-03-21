import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet'

@Injectable({
  providedIn: 'root'
})
export class MocMapService {

  baseURL: string = 'http://localhost:3000/DAFacility';
  constructor(private webReqService: WebRequestService, private http: HttpClient) { }

  getMarkers(map: L.Map): void {
    this.http.get(this.baseURL).subscribe((res: any)=> {
      for (const c of res){
        const lat = c.latitude;
        const lon = c.longitude;
        var marker = L.marker([lon, lat], {draggable: true}).addTo(map);
        marker.bindPopup(`<center><p><strong>${c.facilityName}</strong></p></center>`+ marker.getLatLng()).openPopup();
        console.log(lat, "From services")
      }
      
      
    });
  }
}
