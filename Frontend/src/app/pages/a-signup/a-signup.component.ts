import { Component, OnInit } from '@angular/core';
import { ASignupService } from 'src/app/service/a-signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-a-signup',
  templateUrl: './a-signup.component.html',
  styleUrls: ['./a-signup.component.css']
})
export class ASignupComponent implements OnInit {
  emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
showSucessMessage: boolean;
serverErrorMessages: string;

constructor(public aSignUp: ASignupService) {}

ngOnInit(): void {}
onSubmit(form: NgForm) {
  this.aSignUp.postUser(form.value).subscribe(
    (res) => {
      this.showSucessMessage = true;
      setTimeout(() => (this.showSucessMessage = false), 4000);
      this.resetForm(form);
    },
    (err) => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      } else
        this.serverErrorMessages =
          'Something went wrong.';
    }
  );
  console.log('Successfully Added');
}

resetForm(form: NgForm) {
  this.aSignUp.selectedAUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
