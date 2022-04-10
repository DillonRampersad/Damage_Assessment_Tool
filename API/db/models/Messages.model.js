//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false
        //default: "User"
    },
    message:{
        type: String,
        required: false,
        //default:"Content"
    },
    messageDateTime:{
        type: Date,
        required: false,
        default: Date.now
    },
    messageImage:{
        type: [String],
        required: false
    }
})

    
const Messages = mongoose.model( 'Messages', MessagesSchema);

module.exports =  Messages