import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-search',
  templateUrl: './fa-search.component.html',
  styleUrls: ['./fa-search.component.css']
})
export class FASearchComponent implements OnInit {

  constructor() { }

  OrganizationName : string = "TestOrg";
  FacilityName : string = "TestFac";
  //FacilityLocation : Array = ["101.01","202.02"];

  ngOnInit(): void {
  }

}
