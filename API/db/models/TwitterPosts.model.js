const mongoose = require('mongoose');

const TwitterPostsSchema = new mongoose.Schema({
    twitterUsername:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    postContent:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    postDateTime:{
        type: Date,
        required: true,
        default: Date.now
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'DamageAssessments'
    }
})

    
const TwitterPosts = mongoose.model( 'TwitterPosts', TwitterPostsSchema);

module.exports =  TwitterPosts