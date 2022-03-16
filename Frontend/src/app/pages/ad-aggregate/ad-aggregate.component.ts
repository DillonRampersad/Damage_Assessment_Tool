import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AggregationService } from 'src/app/service/aggregation.service';


@Component({
  selector: 'app-ad-aggregate',
  templateUrl: './ad-aggregate.component.html',
  styleUrls: ['./ad-aggregate.component.css']
})
export class AdAggregateComponent implements OnInit {
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

