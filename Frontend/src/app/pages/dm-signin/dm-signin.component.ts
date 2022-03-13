import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DmSignupService } from 'src/app/service/dm-signup.service';

@Component({
  selector: 'app-dm-signin',
  templateUrl: './dm-signin.component.html',
  styleUrls: ['./dm-signin.component.css']
})
export class DmSigninComponent implements OnInit {

  constructor(private router : Router, private dmSignUpService: DmSignupService) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit(): void {
    if(this.dmSignUpService.isLoggedIn())
    this.router.navigateByUrl('/dm-dashboard')
  }

  onSubmit(form : NgForm){
    this.dmSignUpService.login(form.value).subscribe(
      res => {
        this.dmSignUpService.setToken(res['token']);
        this.router.navigateByUrl('/dm-dashboard');
      }
    );
  }

}
