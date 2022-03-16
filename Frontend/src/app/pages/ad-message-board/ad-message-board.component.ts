import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageBoardService } from 'src/app/service/message-board.service';
import { Message } from 'src/app/models/messages.interface';
import { MocSignupService } from 'src/app/service/moc-signup.service';

@Component({
  selector: 'app-ad-message-board',
  templateUrl: './ad-message-board.component.html',
  styleUrls: ['./ad-message-board.component.css']
})
export class AdMessageBoardComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageBoardService, private mocsignup: MocSignupService, private router : Router) { }
  form = new FormGroup({
    username: new FormControl(''),
    message: new FormControl(''),
    messageDateTime: new FormControl(''),
  });


  addMessage() {
    console.log('adding');
    
    let formData: any = {
      username: this.form.value.username,
      message: this.form.value.message,
      //messageDateTime: this.form.value.messageDateTime
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
  }
}