import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PreFacService } from 'src/app/service/pre-fac.service';

@Component({
  selector: 'app-ad-pre-fac',
  templateUrl: './ad-pre-fac.component.html',
  styleUrls: ['./ad-pre-fac.component.css']
})
export class AdPreFacComponent implements OnInit {
  image:any;
  Image = [];
  imageData:any;
  lat;
  lon;

  constructor(private router: Router, private prefac: PreFacService) { }
  form = new FormGroup({
    organizationName: new FormControl(''),
    manager: new FormControl(''),
    facilityName: new FormControl(''),
    area: new FormControl(''),
    areaCode: new FormControl(''),
    facilityContact: new FormControl(''),
    noOfEqu: new FormControl(''),
    noOfEmployees: new FormControl(''),
    buildingManufacturer: new FormControl(''),
    manufacturerContact: new FormControl(''),
    cost: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
  });

  


  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files;
    this.form.patchValue({ Image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];

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

  addprefacForm() {
    console.log('adding');
    const formData = new FormData();
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('manager', this.form.value.manager);
    formData.append('facilityName',this.form.value.facilityName);
    formData.append('area',this.form.value.area);
    formData.append('areaCode',this.form.value.areaCode);
    formData.append('facilityContact',this.form.value.facilityContact);
    formData.append('noOfEqu',this.form.value.noOfEqu);
    formData.append('noOfEmployees',this.form.value.noOfEmployees);
    formData.append('buildingManufacturer',this.form.value.buildingManufacturer);
    formData.append('manufacturerContact',this.form.value.manufacturerContact);
    formData.append('cost',this.form.value.cost);
    formData.append('latitude',this.lat);
    formData.append('longitude',this.lon);
    formData.append('floorPlan', this.image);
    this.prefac.postPreFacForm(formData).subscribe((d) => {
      console.log(d);
    });
    alert("Are you sure you want to submit?")
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
