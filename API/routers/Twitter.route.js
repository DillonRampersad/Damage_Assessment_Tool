//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM

const express = require("express");
const router = new express.Router();
var Twitter = require("twit");

const TwitterPosts = require("../db/models/TwitterPosts.model");

var client = new Twitter({
  consumer_key: "wT1ZUJgfYT0GdGv4WvsN23A8l",
  consumer_secret: "1PMbDm8Spn7gqgtyZYGmQZbH2HRn80rKDKE2Qo4qluUuxy4bk2",
  access_token: "1472188612494172172-BSulST3wZQH976BuTL8xYLqL1wm8tW",
  access_token_secret: "QifXf4ocFhgSsZZcHpDaEMPlN6ahxGXNtrsQZF9dpSZ4v",
});

var stream = client.stream("statuses/filter", { track: "#TelecomDisaster" });
stream.on("tweet", function (tweet) {
  console.log(tweet);
  let newtweet = new TwitterPosts({
    twitterUsername: tweet.user.screen_name,
    postContent: tweet.text,
    postDateTime: tweet.created_at
  });
  newtweet.save().then((twit) => {
    console.log(twit);
  });
});

const TwitterController = require('../controllers/Twitter.controller');
  
//Get
router.get('/Twitter', TwitterController.Twitter_get_all)



module.exports = router;
