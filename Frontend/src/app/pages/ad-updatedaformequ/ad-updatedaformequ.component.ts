import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DAFormEqu } from 'src/app/models/daformequ.interface';
import { DaformequService } from 'src/app/service/daformequ.service';

@Component({
  selector: 'app-ad-updatedaformequ',
  templateUrl: './ad-updatedaformequ.component.html',
  styleUrls: ['./ad-updatedaformequ.component.css']
})
export class AdUpdatedaformequComponent implements OnInit {
  image: any;
  Image = [];
  imageData: any;

  private daFormEqu: DAFormEqu;

  daFormEqus: DAFormEqu[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private router: Router,
    private daformequ: DaformequService,
    private route: ActivatedRoute
  ) {}

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

  updateDAEquForm() {
    console.log('adding');
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('author', this.form.value.author);
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('eventName', this.form.value.eventName);
    formData.append('eventDate', this.form.value.eventDate);
    formData.append('disasterNature', this.form.value.disasterNature);
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('facStatus', this.form.value.facStatus);
    formData.append('equipmentName', this.form.value.equipmentName);
    formData.append('equipmentType', this.form.value.equipmentType);
    formData.append('modelNumber', this.form.value.modelNumber);
    formData.append('manufacturer', this.form.value.manufacturer);
    formData.append('equipmentStatus', this.form.value.equipmentStatus);
    formData.append('partsReq', this.form.value.partsReq);
    formData.append('equipmentDamage', this.form.value.equipmentDamage);
    formData.append('reportStatus', this.form.value.reportStatus);
    formData.append('equImage', this.image);
    this.daformequ.updateDAEquForm(this.form.value, this.route.snapshot.paramMap.get('equID')).subscribe((d) => {
      console.log(d);
    });
    this.router.navigate(['/ad-daform-equ-view']);
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('equID'), ' : ID of report');
    this.getparamformid = this.route.snapshot.paramMap.get('equID');
    this.daformequ
      .getOneDAEquForm(this.getparamformid)
      .subscribe((daFormFac: DAFormEqu[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        this.form = new FormGroup({
          author: new FormControl(daFormFac['author']),
          organizationName: new FormControl(daFormFac['organizationName']),
          eventName: new FormControl(daFormFac['eventName']),
          eventDate: new FormControl(daFormFac['eventDate']),
          disasterNature: new FormControl(daFormFac['disasterNature']),
          facilityName: new FormControl(daFormFac['facilityName']),
          facStatus: new FormControl(daFormFac['facStatus']),
          equipmentName: new FormControl(daFormFac['equipmentName']),
          equipmentType: new FormControl(daFormFac['equipmentType']),
          modelNumber: new FormControl(daFormFac['modelNumber']),
          manufacturer: new FormControl(daFormFac['manufacturer']),
          equipmentStatus: new FormControl(daFormFac['equipmentStatus']),
          partsReq: new FormControl(daFormFac['partsReq']),
          equipmentDamage: new FormControl(daFormFac['equipmentDamage']),
          reportStatus: new FormControl(daFormFac['reportStatus']),
        });
      });
  }
}
