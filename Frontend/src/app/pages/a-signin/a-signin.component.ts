import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ASignupService } from 'src/app/service/a-signup.service';

@Component({
  selector: 'app-a-signin',
  templateUrl: './a-signin.component.html',
  styleUrls: ['./a-signin.component.css']
})
export class ASigninComponent implements OnInit {

  constructor(private router : Router, private aSignUpService: ASignupService) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit(): void {
    if(this.aSignUpService.isLoggedIn())
    this.router.navigateByUrl('/admin-dashboard')
  }

  onSubmit(form : NgForm){
    this.aSignUpService.login(form.value).subscribe(
      res => {
        this.aSignUpService.setToken(res['token']);
        this.router.navigateByUrl('/admin-dashboard');
      }
    );
  }

}
