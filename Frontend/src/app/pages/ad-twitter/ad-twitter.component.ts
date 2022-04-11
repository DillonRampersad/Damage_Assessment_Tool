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

  /*
  <mat-card>
            <mat-card-content>
              <mat-card *ngFor="let tweets of twit.slice().reverse()">
                <mat-card-content class="text">
                    <h3><b>User: </b>@{{tweets.twitterUsername}}</h3>
                <h3><b>Date: </b>{{tweets.postDateTime | date: "short"}}</h3>
                <h3>"{{tweets.postContent}}"</h3>
                    <br/>
                </mat-card-content>
                <mat-divider></mat-divider>
            </mat-card>
            </mat-card-content>
        </mat-card>
        */
}
