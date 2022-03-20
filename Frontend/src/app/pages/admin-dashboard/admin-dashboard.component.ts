import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ASignupService } from 'src/app/service/a-signup.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminsignup: ASignupService, private router : Router) { }

  ngOnInit(): void {
  }
  onLogoutAdmin() {
    this.adminsignup.deleteToken();
    //localStorage.clear;
    this.router.navigate(['/a-signin']);
  }

}
