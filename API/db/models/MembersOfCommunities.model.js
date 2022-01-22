const mongoose = require('mongoose');

const MembersOfCommunitiesSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    username:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    classType:{
        type: Number,
        required: true,
        default: 3
    }
})

    
const MembersOfCommunities = mongoose.model( 'MembersOfCommunities', MembersOfCommunitiesSchema);

module.exports =  MembersOfCommunities