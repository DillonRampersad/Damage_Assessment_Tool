import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaSignupService } from 'src/app/service/fa-signup.service';
@Component({
  selector: 'app-fa-dashbooard',
  templateUrl: './fa-dashbooard.component.html',
  styleUrls: ['./fa-dashbooard.component.css']
})
export class FADashbooardComponent implements OnInit {
  faUserDetails;
  constructor(private faSignUpService : FaSignupService, private router: Router) { }

  ngOnInit(): void {
    this.faSignUpService.getUserProfile().subscribe(
      res => {
        this.faUserDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.faSignUpService.deleteToken();
    this.router.navigate(['/fa-signin']);
  }

}
