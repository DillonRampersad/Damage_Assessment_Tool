import { Component, OnInit } from '@angular/core';
import { MocSignupService } from 'src/app/service/moc-signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-moc-signup',
  templateUrl: './moc-signup.component.html',
  styleUrls: ['./moc-signup.component.css']
})
export class MocSignupComponent implements OnInit {
  emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
showSucessMessage: boolean;
serverErrorMessages: string;

constructor(public mocSignUp: MocSignupService) {}

ngOnInit(): void {}
onSubmit(form: NgForm) {
  this.mocSignUp.postUser(form.value).subscribe(
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
  this.mocSignUp.selectedMOCUser = {
    username: '',
    email: '',
    password: '',
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
