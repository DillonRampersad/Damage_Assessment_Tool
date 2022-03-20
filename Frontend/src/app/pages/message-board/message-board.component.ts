import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageBoardService } from 'src/app/service/message-board.service';
import { Message } from 'src/app/models/messages.interface';
import { MocSignupService } from 'src/app/service/moc-signup.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  messages: Message[] = [];
  mocUserDetails;
  MocUsername;

  constructor(private messageService: MessageBoardService, private mocsignup: MocSignupService, private router : Router) { }
  form = new FormGroup({
    username: new FormControl(''),
    message: new FormControl(''),
    messageDateTime: new FormControl(''),
  });


  addMessage() {
    console.log('adding');
    this.mocsignup.getUserProfile().subscribe((res) => {
      this.mocUserDetails = res['user'];
    });
    let userDetail = this.mocUserDetails.username;
    console.log(userDetail);
    let formData: any = {
      username: userDetail,
      message: this.form.value.message,
    }
    this.messageService.postMessage(formData).subscribe((d) => {
      console.log(d);
    });
    window.location.reload();
  }

  

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((M: Message[]) => {
      this.messages = M;
    })
    this.mocsignup.getUserProfile().subscribe((res) => {
      this.mocUserDetails = res['user'];
    });
  }

  onLogoutMoc() {
    this.mocsignup.deleteToken();
    //localStorage.clear;
    this.router.navigate(['/moc-signin']);
  }
}


//<mat-form-field>
  //            <mat-label>Username:</mat-label>
    //          <input
     //           placeholder="Username"
       //         matInput
         //       formControlName="username"
           //     class="form-control"
             //   type="string"
              // />
            //</mat-form-field>