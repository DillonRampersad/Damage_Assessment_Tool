import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FaSearchService } from '../../fa-search.service';
import { OrgFac } from '../../OrgFac.model';
@Component({
  selector: 'app-fa-search',
  templateUrl: './fa-search.component.html',
  styleUrls: ['./fa-search.component.css']
})
export class FASearchComponent implements OnInit {

  constructor(public orgFacService: FaSearchService) { }

  OrganizationName : string = "TestOrg";
  FacilityName : string = "TestFac";
  FacilityLocation : Array<number> = [101.01,202.02];
  //private orgFacSub: Subscription;

  orgFac: OrgFac[]=[
   
  ]; 


  onAdd(){
    this.orgFacService.addOrgAndFac(this.OrganizationName, this.FacilityName, this.FacilityLocation)
    //let tempOrg: OrgFac = {OrganizationName:this.OrganizationName, FacilityName:this.FacilityName, FacilityLocation:this.FacilityLocation};
    //this.orgFac.push(tempOrg);
  }

  ngOnInit(): void {
  //  this.orgFacSub = this.orgFacService.getorgFacUpdateListener()
  //  .subscribe((orgFac: OrgFac[])=> {
  //    this.orgFac=orgFac;
  //  });
  }

  //ngOnDestroy(){
  //  this.orgFacSub.unsubscribe();
  //}

}
