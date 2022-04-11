import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AggregationService } from 'src/app/service/aggregation.service';
import { FaSignupService } from 'src/app/service/fa-signup.service';

@Component({
  selector: 'app-fa-dashbooard',
  templateUrl: './fa-dashbooard.component.html',
  styleUrls: ['./fa-dashbooard.component.css'],
})
export class FADashbooardComponent implements OnInit {
  faUserDetails;
  aggregationFac;
  aggregationUnckFac;
  aggregationCkFac;
  aggregationEqu;
  aggregationUnckEqu;
  aggregationCkEqu;
  constructor(
    private faSignUpService: FaSignupService,
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
    
    this.faSignUpService.getUserProfile().subscribe((res) => {
      this.faUserDetails = res['user'];
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
  }

  onLogout() {
    this.faSignUpService.deleteToken();
    this.router.navigate(['/fa-signin']);
  }
}
