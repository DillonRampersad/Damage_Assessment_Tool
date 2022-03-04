import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageBoardService } from 'src/app/service/message-board.service';
import { Message } from 'src/app/models/messages.interface';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageBoardService) { }
  form = new FormGroup({
    username: new FormControl(''),
    message: new FormControl(''),
  });


  addMessage() {
    console.log('adding');
    const formData = new FormData();
    formData.append('username', this.form.value.username);
    formData.append('message',this.form.value.message);
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