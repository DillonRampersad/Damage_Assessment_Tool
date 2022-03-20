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
    }
})

    
const Messages = mongoose.model( 'Messages', MessagesSchema);

module.exports =  Messages