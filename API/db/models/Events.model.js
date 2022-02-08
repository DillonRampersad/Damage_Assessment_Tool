const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    eventName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    eventDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    area:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    surroundingDamage:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'DamageAssessments'
    }
})

    
const Events = mongoose.model( 'Events', EventsSchema);

module.exports =  Events