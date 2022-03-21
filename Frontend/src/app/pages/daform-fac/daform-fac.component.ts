import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';
declare const L: any;
@Component({
  selector: 'app-daform-fac',
  templateUrl: './daform-fac.component.html',
  styleUrls: ['./daform-fac.component.css']
})
export class DaformFacComponent implements OnInit {

  image:any;
  Image = [];
  imageData:any;
  lat;
  lon;

  constructor(private router: Router, private daformfacservice: DaformfacserviceService,) { }

  form = new FormGroup({
    author: new FormControl(''),
    organizationName: new FormControl(''),
    eventName: new FormControl(''),
    eventDate: new FormControl(''),
    area: new FormControl(''),
    areaCode: new FormControl(''),
    disasterNature: new FormControl(''),
    threatLevel: new FormControl(''),
    surroundingDamage: new FormControl(''),
    facilityName: new FormControl(''),
    facStatus: new FormControl(''),
    operEqu: new FormControl(''),
    inoperEqu: new FormControl(''),
    facilityDamage: new FormControl(''),
    reportStatus: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
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

  addDAFacForm() {
    console.log('adding');
    //this.daformfacservice.addMOCReport(this.facilityName, this.MoCDescription, this.MoCReportDateTime, this.mocImage);
    const formData = new FormData();
    formData.append('author', this.form.value.author);
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('eventName',this.form.value.eventName);
    formData.append('eventDate', this.form.value.eventDate);
    formData.append('area', this.form.value.area);
    formData.append('areaCode', this.form.value.areaCode);
    formData.append('disasterNature',this.form.value.disasterNature);
    formData.append('threatLevel', this.form.value.threatLevel);
    formData.append('surroundingDamage', this.form.value.surroundingDamage);
    formData.append('facilityName',this.form.value.facilityName);
    formData.append('facStatus',this.form.value.facStatus);
    formData.append('operEqu', this.form.value.operEqu);
    formData.append('inoperEqu', this.form.value.inoperEqu);
    formData.append('facilityDamage',this.form.value.facilityDamage);
    formData.append('reportStatus',this.form.value.reportStatus);
    formData.append('latitude',this.lat);
    formData.append('longitude',this.lon);
    formData.append('facImage', this.image);
    console.log(this.lat, this.lon, "formdata results")
    this.daformfacservice.postDAFacForm(formData).subscribe((d) => {
      console.log(d);
    });
    //this.router.navigate(['/fa-dashboard']);
  }


  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log("location is not supported");
    }
    navigator.geolocation.getCurrentPosition((position)=>
    {
      console.log(`lat: ${position.coords.latitude}, lon:${position.coords.longitude}`)
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    })
  }

}
