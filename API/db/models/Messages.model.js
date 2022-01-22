const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    messageDateTime:{
        type: Date,
        required: true,
        default: Date.now
    },
    _membersofCommunitiesID:{
        type: mongoose.Types.ObjectId,
        required: true
    }
})

    
const Messages = mongoose.model( 'Messages', MessagesSchema);

module.exports =  Messages