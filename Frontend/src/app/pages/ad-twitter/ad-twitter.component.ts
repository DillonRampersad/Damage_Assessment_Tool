import { Component, OnInit } from '@angular/core';
import { Twitter } from 'src/app/models/twitter.interface';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
  selector: 'app-ad-twitter',
  templateUrl: './ad-twitter.component.html',
  styleUrls: ['./ad-twitter.component.css']
})
export class AdTwitterComponent implements OnInit {

  twit: Twitter[] = [];

  constructor(private twitterService : TwitterService) { }

  ngOnInit(): void {
    this.twitterService.twitter().subscribe((twitter: Twitter[]) => {
      this.twit = twitter;
    })
  }

}
