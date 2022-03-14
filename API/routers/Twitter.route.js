const express = require('express')
const router = new express.Router();
var Twitter = require('twit')
 
var client = new Twitter({
    consumer_key: 'XfZRZ4YM4YWeqw1CpNWFvc2rm',
    consumer_secret: 'AoOUxTKeykSh7rW6a0eu5DOKrWE8Z1Hcsfb1hlEjT7QfSDk1Xz',
    access_token:         '1472188612494172172-H69VBBNemAtKQ6PTIPUDctCzF5UWus',
    access_token_secret:  'BYaItx8eP1K5tDLEantKl5vKOc5dsonoVsOACarhLgS4y'
    //bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIqCZwEAAAAATXl2KozhGN7Ld6gxvmsf9fvFfFI%3DI4ptknXev7jEzK5opvjS9NfMbvZ3LvOWTljJLikr4HuHg9nWeK'
});

//client.get('search/tweets', { q: 'banana since:2011-07-11', count: 100}, function(err, data, response) {
//    console.log(data)
//  })

var stream = client.stream('statuses/filter', { track: '#Space' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet)
})

module.exports = router;