import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PreFac } from 'src/app/models/preFac.interface';
import { PreFacService } from 'src/app/service/pre-fac.service';

@Component({
  selector: 'app-updateprefac',
  templateUrl: './updateprefac.component.html',
  styleUrls: ['./updateprefac.component.css'],
})
export class UpdateprefacComponent implements OnInit {
  image: any;
  Image = [];
  imageData: any;

  private preFac: PreFac;

  preFacs: PreFac[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private router: Router,
    private preFaci: PreFacService,
    private route: ActivatedRoute
  ) {}

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

  updatePreFacForm() {
    console.log('adding');
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('organizationName', this.form.value.organizationName);
    formData.append('manager', this.form.value.manager);
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('area', this.form.value.area);
    formData.append('areaCode', this.form.value.areaCode);
    formData.append('facilityContact', this.form.value.facilityContact);
    formData.append('noOfEqu', this.form.value.noOfEqu);
    formData.append('noOfEmployees', this.form.value.noOfEmployees);
    formData.append(
      'buildingManufacturer',
      this.form.value.buildingManufacturer
    );
    formData.append('manufacturerContact', this.form.value.manufacturerContact);
    formData.append('cost', this.form.value.cost);
    formData.append('floorPlan', this.image);
    this.preFaci
      .updatePreFacForm(
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
    this.preFaci
      .getOnePreFacForm(this.getparamformid)
      .subscribe((daFormFac: PreFac[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        this.form = new FormGroup({
          organizationName: new FormControl(daFormFac['organizationName']),
          manager: new FormControl(daFormFac['manager']),
          facilityName: new FormControl(daFormFac['facilityName']),
          area: new FormControl(daFormFac['area']),
          areaCode: new FormControl(daFormFac['areaCode']),
          facilityContact: new FormControl(daFormFac['facilityContact']),
          noOfEqu: new FormControl(daFormFac['noOfEqu']),
          noOfEmployees: new FormControl(daFormFac['noOfEmployees']),
          buildingManufacturer: new FormControl(
            daFormFac['buildingManufacturer']
          ),
          manufacturerContact: new FormControl(
            daFormFac['manufacturerContact']
          ),
          cost: new FormControl(daFormFac['cost']),
        });
      });
  }
}
