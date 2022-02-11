import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DamageAssessmentReportService } from 'src/app/service/damage-assessment-report.service';
import { OrganizationsInt } from '../../models/organizations.interface';
import { Report } from '../../models/report.interface';

@Component({
  selector: 'app-fa-search',
  templateUrl: './fa-search.component.html',
  styleUrls: ['./fa-search.component.css']
})
export class FASearchComponent implements OnInit {

  constructor(
    private damageAssessmentReportService : DamageAssessmentReportService, 
    private router: Router, 
    //private params: Params, 
    private route: ActivatedRoute) 
    { }

  
reports: Report[] = [
  {_id: "TestID", assessmentDescription: "Test Des", author: "Dillon", reportDateTime: new Date(2020, 9, 10)}
];

organizations: OrganizationsInt[] = [
  {_id: "TestOrgID", _damageAssessmentID: "TestDAOrgString", organizationName: "TestOrgName"}
];

//selectedDAReportID: string;

//onDeleteDAReport(){
//  this.damageAssessmentReportService.deleteDAReport(this.selectedDAReportID).subscribe((reports: Report[]) => {
//  this.router.navigate(['/fa-search']);
//  console.log(reports)
//  })
//}

 orgID: string;

 onView(){
  this.damageAssessmentReportService.getDAReportDetailsOrganizations(this.orgID)
  this.route.params.subscribe((params: Params)=> {
      this.orgID = params['orgId'];
      console.log(this.orgID);
    //navigate to /damageAssessments/damageAssessments._id
    this.router.navigate(['/detailed-daforms-view', this.orgID])
})
 }

  ngOnInit(): void {
  this.damageAssessmentReportService.getDAReport().subscribe((DAReport: Report[])=>{
    this.reports= DAReport;

  })
  //this.damageAssessmentReportService.getDAReportDetailsOrganizations()
  //this.route.params.subscribe((params: Params)=> {
  //  this.orgID = params['orgId'];
  //  console.log(this.orgID);
  //})
  }

}
