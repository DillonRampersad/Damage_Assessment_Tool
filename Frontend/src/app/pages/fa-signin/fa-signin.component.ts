import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FaSignupService } from 'src/app/service/fa-signup.service';

@Component({
  selector: 'app-fa-signin',
  templateUrl: './fa-signin.component.html',
  styleUrls: ['./fa-signin.component.css']
})
export class FaSigninComponent implements OnInit {

  constructor(private router : Router, private faSignInService: FaSignupService) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit(): void {
    if(this.faSignInService.isLoggedIn())
    this.router.navigateByUrl('/fa-dashboard')
  }

  onSubmit(form : NgForm){
    this.faSignInService.login(form.value).subscribe(
      res => {
        this.faSignInService.setToken(res['token']);
        this.router.navigateByUrl('/fa-dashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}