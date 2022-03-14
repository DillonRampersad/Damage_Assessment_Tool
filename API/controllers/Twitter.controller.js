
const express = require('express')
const router = new express.Router();

var Twitter = require('twitter')
 
var client = new Twitter({
    consumer_key: '7fVK1UxLcpwLcGOpkv8QeS2kX',
    consumer_secret: 'mmePiuqSp3WCdOz3M0f3HDcDePYR2nHJyYvct8eDKvLr0Ro9fh',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIqCZwEAAAAATXl2KozhGN7Ld6gxvmsf9fvFfFI%3DI4ptknXev7jEzK5opvjS9NfMbvZ3LvOWTljJLikr4HuHg9nWeK'
  });

//  var stream = client.stream('statuses/filter', { track: '#Space' })
 
//stream.on('tweet', function (tweet) {
//  console.log(tweet)
//})

//exports.Twitter_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  //client.get('search/tweets', { q: 'banana since:2011-07-11', count: 100}, function(err, data, response) {
  //  console.log(data)
    //res.send(data)
  //})
//};



  


