import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AggregationService } from 'src/app/service/aggregation.service';


@Component({
  selector: 'app-aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.css']
})
export class AggregationComponent implements OnInit {
  aggregationFac;
  aggregationUnckFac;
  aggregationCkFac;
  aggregationEqu;
  aggregationUnckEqu;
  aggregationCkEqu;
  aggregationMoc;
  aggregationUnckMoc;
  aggregationCkMoc;

  fcDamage:any;
  eqDamage:any;
  moc:any;
  messages:any;

  constructor(private aggregation: AggregationService) { }
  
  searchFac(facilityDamage) {
    console.log("click")
    this.aggregation.postDAFacForm(facilityDamage).subscribe((f) => {
      this.fcDamage=f;
      console.log(this.fcDamage);
    });
    console.log("afterClick")
  }

  searchEqu(equipmentDamage) {
    this.aggregation.postDAEquForm(equipmentDamage).subscribe((e) => {
      this.eqDamage=e;
      console.log(this.eqDamage);
    });
  }

  searchMOC(MoCDescription) {
    this.aggregation.postMOCForm(MoCDescription).subscribe((e) => {
      this.moc=e;
      console.log(this.moc);
    });
  }

  searchMessage(message) {
    this.aggregation.postMessageForm(message).subscribe((m) => {
      this.messages=m;
      console.log(this.messages);
    });
  }

  ngOnInit(): void {
    //Fac
    this.aggregation.noOfDAFacReports().subscribe((res) => {
      this.aggregationFac = res;
    });
    this.aggregation.noOfUnckDAFacReports().subscribe((res) => {
      this.aggregationUnckFac = res;
    });
    this.aggregation.noOfCkDAFacReports().subscribe((res) => {
      this.aggregationCkFac = res;
    });

    //Equ
    this.aggregation.noOfDAEquReports().subscribe((res) => {
      this.aggregationEqu = res;
    });
    this.aggregation.noOfUnckDAEquReports().subscribe((res) => {
      this.aggregationUnckEqu = res;
    });
    this.aggregation.noOfCkDAEquReports().subscribe((res) => {
      this.aggregationCkEqu = res;
    });

    //Moc
    this.aggregation.noOfMocReports().subscribe((res) => {
      this.aggregationMoc = res;
    });
    this.aggregation.noOfUnckMocReports().subscribe((res) => {
      this.aggregationUnckMoc = res;
    });
    this.aggregation.noOfCkMocReports().subscribe((res) => {
      this.aggregationCkMoc = res;
    });
  }

}



/*
<mat-card>
          <mat-card-content>
              <h3>Search by <b>Author</b> for Damage Assessment of <b>Facility</b></h3>
            <form [formGroup]="form" (submit)="searchAuthorF()">
                <mat-form-field>
                  <mat-label>Facility Report by Author:</mat-label>
                  <input
                    placeholder="Search by Author..."
                    matInput
                    formControlName="author"
                    class="form-control"
                    type="string"
                    required
                  />
               </mat-form-field>
                <br />
                <button mat-raised-button color="basic" type="submit">Send</button>
                <br />
                <mat-divider></mat-divider>
              </form>
              <br/>
              <mat-divider></mat-divider>
              <div *ngFor = "let authData of fcDamage">
                <h3>Author: {{authData.author}}</h3>
                <h3>Organization Name: {{authData.organizationName}}</h3>
                <h3>Facility Name: {{authData.facilityName}}</h3>
                <h3>Area: {{authData.area}}</h3>
                <h3>Event: {{authData.eventName}}</h3>
                <h3>Date: {{authData.eventDate | date:'shortDate'}}</h3>
                <h3>Disaster: {{authData.disasterNature}}</h3>
                <h3>Description: {{authData.surroundingDamage}}</h3>
                <mat-divider></mat-divider>
              </div>
              <mat-divider></mat-divider>
          </mat-card-content>
      </mat-card>
      */