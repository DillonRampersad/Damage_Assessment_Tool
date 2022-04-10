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

  image: any;
  Image = [];
  imageData: any;

  constructor(private messageService: MessageBoardService, private mocsignup: MocSignupService, private router : Router) { }
  form = new FormGroup({
    username: new FormControl(''),
    message: new FormControl(''),
    messageDateTime: new FormControl(''),
  });


  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files;
    this.form.patchValue({ Image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      if (file) {
        reader.readAsDataURL(file[0]);
      }
    }
    console.log(event.target.files[0]);
    const Image = event.target.files[0];
    this.image = Image;
  }

  addMessage() {
    const formData = new FormData();
    formData.append('username', "Admin");
    formData.append('message', this.form.value.message);
    formData.append('messageImage', this.image);
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