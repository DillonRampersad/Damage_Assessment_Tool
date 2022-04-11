import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ASignupService } from 'src/app/service/a-signup.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private adminsignup: ASignupService, private router: Router) {}

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  onLogoutAdmin() {
    this.adminsignup.deleteToken();
    //localStorage.clear;
    this.router.navigate(['/a-signin']);
  }
}
