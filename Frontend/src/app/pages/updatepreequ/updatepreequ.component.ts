import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PreEqu } from 'src/app/models/preEqu.interface';
import { PreEquService } from 'src/app/service/pre-equ.service';

@Component({
  selector: 'app-updatepreequ',
  templateUrl: './updatepreequ.component.html',
  styleUrls: ['./updatepreequ.component.css']
})
export class UpdatepreequComponent implements OnInit {
  image: any;
  Image = [];
  imageData: any;

  private preEqu: PreEqu;

  preEqus: PreEqu[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private router: Router,
    private preEqui: PreEquService,
    private route: ActivatedRoute
  ) {}

  form = new FormGroup({
    organizationName: new FormControl(''),
    facilityName: new FormControl(''),
    facilityContact: new FormControl(''),
    equipmentName: new FormControl(''),
    equipmentType: new FormControl(''),
    modelNumber: new FormControl(''),
    manufacturer: new FormControl(''),
    manufacturerContact: new FormControl(''),
    cost: new FormControl(''),
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

  updatePreEquForm() {
    console.log('adding');
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('facilityContact', this.form.value.facilityContact);
    formData.append('equipmentName', this.form.value.equipmentName);
    formData.append('equipmentType', this.form.value.equipmentType);
    formData.append('modelNumber', this.form.value.modelNumber);
    formData.append('manufacturer', this.form.value.manufacturer);
    formData.append('manufacturerContact', this.form.value.manufacturerContact);
    formData.append('cost', this.form.value.cost);
    formData.append('specSheet', this.image);
    this.preEqui
      .updatePreEquForm(
        this.form.value,
        this.route.snapshot.paramMap.get('equID')
      )
      .subscribe((d) => {
        console.log(d);
      });
    this.router.navigate(['/fa-dashboard']);
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('equID'), ' : ID of report');
    this.getparamformid = this.route.snapshot.paramMap.get('equID');
    this.preEqui
      .getOnePreEquForm(this.getparamformid)
      .subscribe((daFormFac: PreEqu[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        this.form = new FormGroup({
          organizationName: new FormControl(daFormFac['organizationName']),
          facilityName: new FormControl(daFormFac['facilityName']),
          facilityContact: new FormControl(daFormFac['facilityContact']),
          equipmentName: new FormControl(daFormFac['equipmentName']),
          equipmentType: new FormControl(daFormFac['equipmentType']),
          modelNumber: new FormControl(daFormFac['modelNumber']),
          manufacturer: new FormControl(daFormFac['manufacturer']),
          manufacturerContact: new FormControl(daFormFac['manufacturerContact']),
          cost: new FormControl(daFormFac['cost']),
        });
      });
  }
}
