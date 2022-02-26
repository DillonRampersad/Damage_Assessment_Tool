import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  onClickFA(){
    this.router.navigate(['fa-signin']);
  }
  onClickDM(){
    this.router.navigate(['dm-dashboard']);
  }
  onClickA(){
    this.router.navigate(['admin-dashboard']);
  }
  onClickMB(){
    this.router.navigate(['message-board']);
  }

  ngOnInit(): void {
  }

}
