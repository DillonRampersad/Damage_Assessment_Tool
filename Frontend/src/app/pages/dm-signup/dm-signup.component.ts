import { Component, OnInit } from '@angular/core';
import { DmSignupService } from 'src/app/service/dm-signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dm-signup',
  templateUrl: './dm-signup.component.html',
  styleUrls: ['./dm-signup.component.css']
})
export class DmSignupComponent implements OnInit {
  emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
showSucessMessage: boolean;
serverErrorMessages: string;

constructor(public dmSignup: DmSignupService) {}

ngOnInit(): void {}
onSubmit(form: NgForm) {
  this.dmSignup.postUser(form.value).subscribe(
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
          'Something went wrong.Please contact admin.';
    }
  );
  console.log('Successfully Added');
}

resetForm(form: NgForm) {
  this.dmSignup.selectedDMUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    employeeID: '',
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
