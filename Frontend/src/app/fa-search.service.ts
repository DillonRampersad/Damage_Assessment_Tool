import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrgFac } from './OrgFac.model';

@Injectable({
  providedIn: 'root'
})
export class FaSearchService {

  private orgFac: OrgFac[] = [];
  private orgFacUpdated = new Subject<OrgFac[]>();

  constructor(private http: HttpClient) { }

  addOrgAndFac(OrganizationName : string, FacilityName : string, FacilityLocation : Array<number>){
    const orgFac: OrgFac = {OrganizationName : OrganizationName, FacilityName : FacilityName, FacilityLocation : FacilityLocation}
    this.http.post<{message: string}>("http://localhost:3000/routers/OrganizationsRouters", orgFac)
    .subscribe(responseDate => {
      this.orgFac.push(orgFac);
      this.orgFacUpdated.next([...this.orgFac]);
    });
  }
  getorgFacUpdateListener(){
    return this.orgFacUpdated.asObservable();
  }
}
