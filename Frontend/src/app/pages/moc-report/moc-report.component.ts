import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MOCReport } from 'src/app/models/mocreport.interface';

import { MOCReportService } from 'src/app/service/mocreport.service';

import * as L from 'leaflet';
import { MocMapService } from 'src/app/service/moc-map.service';

@Component({
  selector: 'app-moc-report',
  templateUrl: './moc-report.component.html',
  styleUrls: ['./moc-report.component.css'],
})
export class MocReportComponent implements OnInit, AfterViewInit {
  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [10.536421, -61.311951],
      zoom: 8,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  form: FormGroup;
  imageData: string;

  constructor(
    private mocreportservice: MOCReportService,
    private mapService: MocMapService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMarkers(this.map);
  }

  //  onMapClick(e) {
  //  this.L.popup()
  //      .setLatLng(e.latlng)
  //      .setContent("You clicked the map at " + e.latlng.toString())
  //      .openOn(this.map);
  //}

  // this.map.on('click', this.onMapClick);

  selectedFile = null;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  createMOCForm(
    facilityName: string,
    MoCDescription: string,
    MoCReportDateTimeString: string
  ) {
    //IMAGE POST
    //const formData = new FormData();
    //formData.append('mocImage', this.selectedFile);
    //this.http.post<any>('http://localhost:3000/MOCReport', formData).subscribe;
    //((picture: any)=>{
    //  console.log(picture);
    //}
    const MoCReportDateTime = new Date(MoCReportDateTimeString);
    //const MoCDisasterLocation = Array[MoCDisasterLocationArray];
    this.mocreportservice
      .createMOCReport(facilityName, MoCDescription, MoCReportDateTime)
      .subscribe((report: MOCReport) => {
        console.log(report);
        this.router.navigate(['/message-board']);
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null),
    });
  }
}
