import { Component, OnInit } from '@angular/core';
import { OrgFac} from '../OrgFac.model';
@Component({
  selector: 'app-fa-search',
  templateUrl: './fa-search.component.html',
  styleUrls: ['./fa-search.component.css']
})
export class FASearchComponent implements OnInit {

  constructor() { }

  OrganizationName : string = "TestOrg";
  FacilityName : string = "TestFac";
  FacilityLocation : Array<number> = [101.01,202.02];

  orgFac: OrgFac[]=[
    {OrganizationName: "TestOrg1", FacilityName: "TestFac1", FacilityLocation: [101.00,202.00]},
    {OrganizationName: "TestOrg2", FacilityName: "TestFac2", FacilityLocation: [102.00,203.00]}

  ]; 


  onAdd(){
    let tempOrg: OrgFac = {OrganizationName:this.OrganizationName, FacilityName:this.FacilityName, FacilityLocation:this.FacilityLocation};
    this.orgFac.push(tempOrg);
  }

  ngOnInit(): void {
  }

}
