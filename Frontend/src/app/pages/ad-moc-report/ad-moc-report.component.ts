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
  selector: 'app-ad-moc-report',
  templateUrl: './ad-moc-report.component.html',
  styleUrls: ['./ad-moc-report.component.css']
})
export class AdMocReportComponent implements OnInit {

  
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
    this.router.navigate(['/admin-dashboard']);
  
  }
  
  
  ngOnInit(): void {}
}
