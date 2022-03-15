const express = require('express')
const router = new express.Router();
var Twitter = require('twit')

const TwitterPosts = require("../db/models/TwitterPosts.model");
 
var client = new Twitter({
    consumer_key: 'XfZRZ4YM4YWeqw1CpNWFvc2rm',
    consumer_secret: 'AoOUxTKeykSh7rW6a0eu5DOKrWE8Z1Hcsfb1hlEjT7QfSDk1Xz',
    access_token:         '1472188612494172172-H69VBBNemAtKQ6PTIPUDctCzF5UWus',
    access_token_secret:  'BYaItx8eP1K5tDLEantKl5vKOc5dsonoVsOACarhLgS4y'
});

//client.get('search/tweets', { q: '#TelecomDisaster'}, function(err, data, response) {
//    console.log(data)
//  })

//router.get('/MOCReportCntCkRpts', MOCReportController.MOCReport_count_checked_reports)


var stream = client.stream('statuses/filter', { track: '#TelecomDisaster' })
stream.on('tweet', function (req, tweet) {
  console.log(tweet)
  let newtweet = new TwitterPosts({
    tweet: req.body.postContent
  });
  newtweet.save().then((twit) => {
    res.send(twit);
    console.log(twit);
})
});

module.exports = router;