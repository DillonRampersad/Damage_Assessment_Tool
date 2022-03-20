import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';
import * as L from 'leaflet';
import { MocMapService } from 'src/app/service/moc-map.service';

@Component({
  selector: 'app-daform-fac-view-full',
  templateUrl: './daform-fac-view-full.component.html',
  styleUrls: ['./daform-fac-view-full.component.css'],
})
export class DaformFacViewFullComponent implements OnInit, AfterViewInit {
  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 10.536421, -61.311951 ],
      zoom: 8
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
   

  daformfac: DAFormFac[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private daformfacservice: DaformfacserviceService,
    private route: ActivatedRoute,
    private mapService: MocMapService,
  ) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMarkers(this.map);
  }

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
      });
  }
  
  /*
  private initMap(): void {
    const map = L.map('map').setView([ 10.536421, -61.311951 ], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZGlsbG9uciIsImEiOiJjbDB6MGdlbW8xNnZuM2lqbmJnNWZkNzY0In0.cfAOIAy5foQsoUlHhpYSjQ}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlsbG9uciIsImEiOiJjbDB6MGdlbW8xNnZuM2lqbmJnNWZkNzY0In0.cfAOIAy5foQsoUlHhpYSjQ'
}).addTo(map)
  }*/
  
}
