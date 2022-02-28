import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MocSignupService } from 'src/app/service/moc-signup.service';

@Component({
  selector: 'app-moc-signin',
  templateUrl: './moc-signin.component.html',
  styleUrls: ['./moc-signin.component.css']
})
export class MocSigninComponent implements OnInit {

  constructor(private router : Router, private mocSignupService: MocSignupService) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  ngOnInit(): void {
    if(this.mocSignupService.isLoggedIn())
    this.router.navigateByUrl('/message-board')
  }

  onSubmit(form : NgForm){
    this.mocSignupService.login(form.value).subscribe(
      res => {
        this.mocSignupService.setToken(res['token']);
        this.router.navigateByUrl('/message-board');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
