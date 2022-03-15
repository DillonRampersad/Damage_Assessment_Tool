import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { MOCReportService } from 'src/app/service/mocreport.service';
import { MOCReport } from 'src/app/models/mocreport.interface';

//import * as L from 'leaflet';
//import { MocMapService } from 'src/app/service/moc-map.service';

@Component({
  selector: 'app-moc-report',
  templateUrl: './moc-report.component.html',
  styleUrls: ['./moc-report.component.css'],
})
//, AfterViewInit
export class MocReportComponent implements OnInit {
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
  image: any;
  Image = [];
  imageData: any;

  private mocreport : MOCReport;

  constructor(
    private mocreportservice: MOCReportService,
    //private mapService: MocMapService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}
  form = new FormGroup({
    facilityName: new FormControl(''),
    MoCDescription: new FormControl(''),
    MoCReportDateTime: new FormControl(''),
  });

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

  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files;
    this.form.patchValue({ Image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      if (file) {
        reader.readAsDataURL(file[0]);
      }
    }
    console.log(event.target.files[0]);
    const Image = event.target.files[0];
    this.image = Image;
  }

  addMOCForm() {
    
    console.log('adding');
    //this.mocreportservice.addMOCReport(this.facilityName, this.MoCDescription, this.MoCReportDateTime, this.mocImage);
    const formData = new FormData();
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('MoCDescription', this.form.value.MoCDescription);
    formData.append(
      'MoCReportDateTimeString',
      this.form.value.MoCReportDateTimeString
    );
    formData.append('mocImage', this.image);
    this.mocreportservice.postMOCForm(formData).subscribe((d) => {
      console.log(d);
    });
    this.router.navigate(['/message-board']);
  
    
  
  }
  
  ngOnInit(): void {}
}
