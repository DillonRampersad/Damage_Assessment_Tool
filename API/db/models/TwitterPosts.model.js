//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const mongoose = require('mongoose');

const TwitterPostsSchema = new mongoose.Schema({
    twitterUsername:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    postContent:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    postDateTime:{
        type: Date,
        required: false,
        default: Date.now
    }
})

    
const TwitterPosts = mongoose.model( 'TwitterPosts', TwitterPostsSchema);

module.exports =  TwitterPosts