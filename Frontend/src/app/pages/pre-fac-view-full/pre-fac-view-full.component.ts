import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreFac } from 'src/app/models/preFac.interface';
import { PreFacService } from 'src/app/service/pre-fac.service';
declare const L: any;
import { MocMapService } from 'src/app/service/moc-map.service';
import { map as MapData } from 'rxjs';

@Component({
  selector: 'app-pre-fac-view-full',
  templateUrl: './pre-fac-view-full.component.html',
  styleUrls: ['./pre-fac-view-full.component.css']
})
export class PreFacViewFullComponent implements OnInit {
  prefacility: PreFac[] = [];

  formID: string;
  getparamformid: any;
  prefacili: any;

  latitude: any;
  longitude: any;

  private map: L.Map;
  constructor(private route: ActivatedRoute, private prefac : PreFacService, private mapService: MocMapService) { }

  addMarker() {
    var marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
    console.log(this.latitude, this.longitude, "in marker");
  }

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('preequviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('preequviewid');
    this.prefac.getOnePreFacForm(this.getparamformid).subscribe((PreFacility: PreFac[]) => {
        this.prefacili = PreFacility;
        console.log(PreFacility, 'response of form');
        this.latitude =  PreFacility['latitude'];
    this.longitude = PreFacility['longitude'];
    console.log(this.latitude, this.longitude, "cords")
    this.addMarker(); // called marker for map position
      });

      this.map = L.map('map').setView([10.536421, -61.311951], 8);
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
    ).addTo(this.map);
    

  }

}
