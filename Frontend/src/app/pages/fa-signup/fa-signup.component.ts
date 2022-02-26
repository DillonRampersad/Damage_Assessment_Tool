import { Component, OnInit } from '@angular/core';
import { FaSignupService } from 'src/app/service/fa-signup.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-fa-signup',
  templateUrl: './fa-signup.component.html',
  styleUrls: ['./fa-signup.component.css']
})
export class FaSignupComponent implements OnInit {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public faSignup: FaSignupService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.faSignup.postUser(form.value).subscribe(
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
    this.faSignup.selectedFAUser = {
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
