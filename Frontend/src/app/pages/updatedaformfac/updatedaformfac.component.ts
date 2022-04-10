import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';

@Component({
  selector: 'app-updatedaformfac',
  templateUrl: './updatedaformfac.component.html',
  styleUrls: ['./updatedaformfac.component.css'],
})
export class UpdatedaformfacComponent implements OnInit {
  image: any;
  Image = [];
  imageData: any;

  private DAFormFac: DAFormFac;

  daformfacs: DAFormFac[] = [];

  formID: string;
  getparamformid: any;
  daformfac: any;

  constructor(
    private router: Router,
    private daformfacility: DaformfacserviceService,
    private route: ActivatedRoute
  ) {}

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

  updateDAFacForm() {
    console.log('adding');
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('author', this.form.value.author);
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('eventName', this.form.value.eventName);
    formData.append('eventDate', this.form.value.eventDate);
    formData.append('area', this.form.value.area);
    formData.append('areaCode', this.form.value.areaCode);
    formData.append('disasterNature', this.form.value.disasterNature);
    formData.append('threatLevel', this.form.value.threatLevel);
    formData.append('surroundingDamage', this.form.value.surroundingDamage);
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('facStatus', this.form.value.facStatus);
    formData.append('operEqu', this.form.value.operEqu);
    formData.append('inoperEqu', this.form.value.inoperEqu);
    formData.append('facilityDamage', this.form.value.facilityDamage);
    formData.append('reportStatus', this.form.value.reportStatus);
    formData.append('facImage', this.image);
    this.daformfacility
      .updateDAFacForm(
        this.form.value,
        this.route.snapshot.paramMap.get('facID')
      )
      .subscribe((d) => {
        console.log(d);
      });
      alert("Are you sure you want to submit?")
    //this.router.navigate(['/dm-dashboard']);
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('facID'), ' : ID of report');
    this.getparamformid = this.route.snapshot.paramMap.get('facID');
    this.daformfacility
      .getOneDAFacForm(this.getparamformid)
      .subscribe((daFormFac: DAFormFac[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        this.form = new FormGroup({
          author: new FormControl(daFormFac['author']),
          organizationName: new FormControl(daFormFac['organizationName']),
          eventName: new FormControl(daFormFac['eventName']),
          eventDate: new FormControl(daFormFac['eventDate']),
          area: new FormControl(daFormFac['area']),
          areaCode: new FormControl(daFormFac['areaCode']),
          disasterNature: new FormControl(daFormFac['disasterNature']),
          threatLevel: new FormControl(daFormFac['threatLevel']),
          surroundingDamage: new FormControl(daFormFac['surroundingDamage']),
          facilityName: new FormControl(daFormFac['facilityName']),
          facStatus: new FormControl(daFormFac['facStatus']),
          operEqu: new FormControl(daFormFac['operEqu']),
          inoperEqu: new FormControl(daFormFac['inoperEqu']),
          facilityDamage: new FormControl(daFormFac['facilityDamage']),
          reportStatus: new FormControl(daFormFac['reportStatus']),
        });
      });
  }
}
