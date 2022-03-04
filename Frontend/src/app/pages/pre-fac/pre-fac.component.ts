import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PreFacService } from 'src/app/service/pre-fac.service';

@Component({
  selector: 'app-pre-fac',
  templateUrl: './pre-fac.component.html',
  styleUrls: ['./pre-fac.component.css']
})
export class PreFacComponent implements OnInit {
  image:any;
  Image = [];
  imageData:any;

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
    formData.append('floorPlan', this.image);
    this.prefac.postPreFacForm(formData).subscribe((d) => {
      console.log(d);
    });
  }


  ngOnInit(): void {
  }

}
