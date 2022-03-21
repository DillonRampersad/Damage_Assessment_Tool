import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';
declare const L: any;
import { MocMapService } from 'src/app/service/moc-map.service';
import { map as MapData } from 'rxjs';

@Component({
  selector: 'app-daform-fac-view-full',
  templateUrl: './daform-fac-view-full.component.html',
  styleUrls: ['./daform-fac-view-full.component.css'],
})
export class DaformFacViewFullComponent implements OnInit {
  daformfac: DAFormFac[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  latitude;
  longitude;

  private map: L.Map;
  constructor(
    private daformfacservice: DaformfacserviceService,
    private route: ActivatedRoute,
    private mapService: MocMapService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('facviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('facviewid');
    this.daformfacservice
      .getOneDAFacForm(this.getparamformid)
      .subscribe((daFormFac: DAFormFac[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        //this.latitude =  daFormFac.latitude);
      //this.longitude = daFormFac.longitude);

        console.log(this.latitude, this.longitude, "cords")
      });
    let map = L.map('map').setView([10.536421, -61.311951], 8);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoiZGlsbG9uciIsImEiOiJjbDB6MGdlbW8xNnZuM2lqbmJnNWZkNzY0In0.cfAOIAy5foQsoUlHhpYSjQ',
      }
    ).addTo(map);
    var marker = L.marker([10.1896062, -61.5282025]).addTo(map);
  }
}
