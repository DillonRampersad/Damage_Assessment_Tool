import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DaformequService } from 'src/app/service/daformequ.service';

@Component({
  selector: 'app-ad-daform-equ',
  templateUrl: './ad-daform-equ.component.html',
  styleUrls: ['./ad-daform-equ.component.css']
})
export class AdDaformEquComponent implements OnInit {
  image:any;
  Image = [];
  imageData:any;

  constructor(private router: Router, private daformequ: DaformequService) { }

  form = new FormGroup({
    author: new FormControl(''),
    organizationName: new FormControl(''),
    eventName: new FormControl(''),
    eventDate: new FormControl(''),
    disasterNature: new FormControl(''),
    facilityName: new FormControl(''),
    facStatus: new FormControl(''),
    equipmentName: new FormControl(''),
    equipmentType: new FormControl(''),
    modelNumber: new FormControl(''),
    manufacturer: new FormControl(''),
    equipmentStatus: new FormControl(''),
    partsReq: new FormControl(''),
    equipmentDamage: new FormControl(''),
    reportStatus: new FormControl(''),

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

  addDAEquForm() {
    console.log('adding');
    const formData = new FormData();
    formData.append('author', this.form.value.author);
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('eventName',this.form.value.eventName);
    formData.append('eventDate', this.form.value.eventDate);
    formData.append('disasterNature',this.form.value.disasterNature);
    formData.append('facilityName',this.form.value.facilityName);
    formData.append('facStatus',this.form.value.facStatus);
    formData.append('equipmentName',this.form.value.equipmentName);
    formData.append('equipmentType',this.form.value.equipmentType);
    formData.append('modelNumber',this.form.value.modelNumber);
    formData.append('manufacturer',this.form.value.manufacturer);
    formData.append('equipmentStatus',this.form.value.equipmentStatus);
    formData.append('partsReq',this.form.value.partsReq);
    formData.append('equipmentDamage',this.form.value.equipmentDamage);
    formData.append('reportStatus',this.form.value.reportStatus);
    formData.append('equImage', this.image);
    this.daformequ.postDAEquForm(formData).subscribe((d) => {
      console.log(d);
    });
    this.router.navigate(['/admin-dashboard']);
  }

  ngOnInit(): void {
  }

}
