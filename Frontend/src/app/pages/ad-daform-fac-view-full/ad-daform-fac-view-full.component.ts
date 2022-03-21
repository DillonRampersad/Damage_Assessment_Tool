import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';
import { MocMapService }from 'src/app/service/moc-map.service'
declare const L: any;

@Component({
  selector: 'app-ad-daform-fac-view-full',
  templateUrl: './ad-daform-fac-view-full.component.html',
  styleUrls: ['./ad-daform-fac-view-full.component.css']
})
export class AdDaformFacViewFullComponent implements OnInit {
  daformfac: DAFormFac[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;
  constructor(
    private daformfacservice: DaformfacserviceService,
    private route: ActivatedRoute,
    private mapService : MocMapService
  ) {}


  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('facviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('facviewid');
    this.daformfacservice.getOneDAFacForm(this.getparamformid).subscribe((daFormFac: DAFormFac[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
      });

      let map = L.map('map').setView([10.536421, -61.311951], 8);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZGlsbG9uciIsImEiOiJjbDB6MGdlbW8xNnZuM2lqbmJnNWZkNzY0In0.cfAOIAy5foQsoUlHhpYSjQ'
  }).addTo(map);
  this.mapService.getMarkers(map)
  }

}
