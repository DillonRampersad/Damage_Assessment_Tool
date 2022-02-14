import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamageAssessmentReportService } from 'src/app/service/damage-assessment-report.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import * as L from 'leaflet';
import { MocMapService } from 'src/app/service/moc-map.service';

@Component({
  selector: 'app-daform-one-collection',
  templateUrl: './daform-one-collection.component.html',
  styleUrls: ['./daform-one-collection.component.css']
})
export class DAFormOneCollectionComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  twopointfiveFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  

  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 10.536421, -61.311951 ],
      zoom: 8
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  

  constructor(private damageAssessmentReportService : DamageAssessmentReportService, private router : Router, private _formBuilder: FormBuilder,  private mapService : MocMapService) { }
  
  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMarkers(this.map);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.twopointfiveFormGroup = this._formBuilder.group({
      twopointfiveCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
    });
    
  }


  createDamageAssessmentForm(
    author1: string, 
    organizationName1: string, 
    facilityName1: string, 
    facilityDamage1: string, 
    //location: string,
    eventName1: string, 
    eventDate1String: string, 
    area1: string, 
    surroundingDamage1: string, 
    disasterNature1: string, 
    threatLevel1:string,
    equipmentName1: string, 
    equipmentType1: string, 
    modelNumber1: string, 
    manufacturer1: string, 
    equipmentDamage1: string,){

    const eventDate1 = new Date(eventDate1String);
    this.damageAssessmentReportService.createDAForm(
      author1, 
      organizationName1, 
      facilityName1, 
      facilityDamage1, 
      eventName1, 
      eventDate1, 
      area1, 
      surroundingDamage1, 
      disasterNature1, 
      threatLevel1,
      equipmentName1, 
      equipmentType1, 
      modelNumber1, 
      manufacturer1, 
      equipmentDamage1)
      .subscribe((report : any)=>{
      console.log(report);
      //navigate to /damageAssessments/damageAssessments._id
      this.router.navigate(['/fa-dashboard'])
    }
    )
  }

}
