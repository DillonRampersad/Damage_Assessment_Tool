import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { MOCReportService } from 'src/app/service/mocreport.service';
import { MOCReport } from 'src/app/models/mocreport.interface';

@Component({
  selector: 'app-update-moc',
  templateUrl: './update-moc.component.html',
  styleUrls: ['./update-moc.component.css'],
})
export class UpdateMocComponent implements OnInit {
  image: any;
  Image = [];
  imageData: any;

  private mocreport: MOCReport;

  mocreports: MOCReport[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private mocreportservice: MOCReportService,
    private router: Router,
    private route: ActivatedRoute
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

  

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('mocID'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('mocID');
    this.mocreportservice.getOneMOCForm(this.getparamformid).subscribe((daFormFac: MOCReport[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
        this.form=new FormGroup({
          facilityName: new FormControl(daFormFac['facilityName']),
          MoCDescription: new FormControl(daFormFac['MoCDescription']),
          MoCReportDateTime: new FormControl(daFormFac['MoCReportDateTime']),
          reportStatus: new FormControl(daFormFac['reportStatus']),
      });
      
      })
  }

  updateMOCForm() {
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('facilityName', this.form.value.facilityName);
    formData.append('MoCDescription', this.form.value.MoCDescription);
    formData.append('MoCReportDateTimeString',this.form.value.MoCReportDateTimeString);
    formData.append('reportStatus',this.form.value.reportStatus);
    formData.append('mocImage', this.image);
    this.mocreportservice.updateMOCForm(this.form.value, this.route.snapshot.paramMap.get('mocID')).subscribe((d) => {
      console.log(d);
    });
    this.router.navigate(['/moc-report-view']);
  }
}
