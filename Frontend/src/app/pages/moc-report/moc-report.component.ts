import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { MOCReport } from 'src/app/models/mocreport.interface';

import { MOCReportService } from 'src/app/service/mocreport.service';

//import * as L from 'leaflet';
//import { MocMapService } from 'src/app/service/moc-map.service';

@Component({
  selector: 'app-moc-report',
  templateUrl: './moc-report.component.html',
  styleUrls: ['./moc-report.component.css'],
})
export class MocReportComponent implements OnInit
//, AfterViewInit 
{
 /*
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
*/
  form: FormGroup;
  mocReport: MOCReport;
  imageData;

  constructor(
    private mocreportservice: MOCReportService,
    //private mapService: MocMapService,
    private router: Router
  ) {}
/*
  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMarkers(this.map);
  }
  */

  //  onMapClick(e) {
  //  this.L.popup()
  //      .setLatLng(e.latlng)
  //      .setContent("You clicked the map at " + e.latlng.toString())
  //      .openOn(this.map);
  //}

  // this.map.on('click', this.onMapClick);


  onFileSelected(event) {
    //const file = (event.target as HTMLInputElement).files[0];
    //this.form.patchValue({ mocImage: file });
    //const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    //if (file && allowedMimeTypes.includes(file.type)) {
    // const reader = new FileReader();
    //  reader.onload = () => {
    //    this.imageData = reader.result as string;
    //  };
    //  reader.readAsDataURL(file);
    //}
    console.log("Select Image")
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageData = file;
    }
  }

  
  //onSubmit(){
    //this.profileService.addProfile(this.form.value.name, this.form.value.image);
    //this.form.reset();
    //this.imageData = null;
  //}

  createMOCForm(
    facilityName: string,
    MoCDescription: string,
    MoCReportDateTimeString: string
  ) {
    //IMAGE POST
    const formData = new FormData();

    formData.append('mocImage', this.imageData);

    const MoCReportDateTime = new Date(MoCReportDateTimeString);
    //const MoCDisasterLocation = Array[MoCDisasterLocationArray];
    this.mocreportservice
      .createMOCReport(
        facilityName,
        MoCDescription,
        MoCReportDateTime,
        formData
      )
      .subscribe((report: MOCReport) => {
        console.log(report);
        this.router.navigate(['/message-board']);
      });
  }

  ngOnInit(): void {
    //this.form = new FormGroup({
    //  facilityName: new FormControl(null),
    //  MoCDescription: new FormControl(null),
    //  MoCReportDateTime: new FormControl(null),
    //  mocImage: new FormControl(null),
    //});
    
  }
}


