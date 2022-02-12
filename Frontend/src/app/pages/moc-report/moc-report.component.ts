import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MOCReport } from 'src/app/models/mocreport.interface';

import { MOCReportService } from 'src/app/service/mocreport.service';

@Component({
  selector: 'app-moc-report',
  templateUrl: './moc-report.component.html',
  styleUrls: ['./moc-report.component.css']
})
export class MocReportComponent implements OnInit {

  form:FormGroup;
  imageData: string;

  constructor(private mocreportservice : MOCReportService, private router : Router, private http: HttpClient) { }
  
  selectedFile = null;
  onFileSelected(event){
    this.selectedFile = event.target.files[0]
  }

  createMOCForm(facilityName: string, MoCDescription: string, MoCReportDateTimeString: string){
    const formData = new FormData();
    formData.append('mocImage', this.selectedFile);
    this.http.post<any>('http://localhost:3000/MOCReport', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    const MoCReportDateTime = new Date(MoCReportDateTimeString);
    //const MoCDisasterLocation = Array[MoCDisasterLocationArray];
    this.mocreportservice.createMOCReport(facilityName, MoCDescription, MoCReportDateTime).subscribe((report : MOCReport)=>{
      console.log(report);
      //navigate to /damageAssessments/damageAssessments._id
      this.router.navigate(['/fa-dashboard'])
  })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null)
    });
  }

  

}
