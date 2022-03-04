const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    message:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    messageDateTime:{
        type: Date,
        required: false,
        default: Date.now
    }
})

    
const Messages = mongoose.model( 'Messages', MessagesSchema);

module.exports =  Messages