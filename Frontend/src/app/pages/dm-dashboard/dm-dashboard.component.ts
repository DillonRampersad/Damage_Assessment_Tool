import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AggregationService } from 'src/app/service/aggregation.service';
import { DmSignupService } from 'src/app/service/dm-signup.service';

@Component({
  selector: 'app-dm-dashboard',
  templateUrl: './dm-dashboard.component.html',
  styleUrls: ['./dm-dashboard.component.css']
})
export class DmDashboardComponent implements OnInit {
  dmUserDetails;
  aggregationFac;
  aggregationUnckFac;
  aggregationCkFac;
  aggregationEqu;
  aggregationUnckEqu;
  aggregationCkEqu;
  aggregationMoc;
  aggregationUnckMoc;
  aggregationCkMoc;
  constructor(
    private dmSingUp: DmSignupService,
    private router: Router,
    private aggregation: AggregationService
  ) {}

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  ngOnInit(): void {

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    
    this.dmSingUp.getUserProfile().subscribe((res) => {
      this.dmUserDetails = res['user'];
    });
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

  onLogout() {
    this.dmSingUp.deleteToken();
    this.router.navigate(['/dm-signin']);
  }
}

//<h3>Number of Checked Reports:
//{{ aggregationCkMoc[0].noOfCheckedMOCReports }}
//</h3>
