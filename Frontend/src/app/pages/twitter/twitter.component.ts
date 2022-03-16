import { Component, OnInit } from '@angular/core';
import { Twitter } from 'src/app/models/twitter.interface';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  twit: Twitter[] = [];

  constructor(private twitterService : TwitterService) { }

  ngOnInit(): void {
    this.twitterService.twitter().subscribe((twitter: Twitter[]) => {
      this.twit = twitter;
    })
  }

}
