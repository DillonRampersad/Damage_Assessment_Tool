const mongoose = require('mongoose');

const DAFacilitySchema = new mongoose.Schema({
    author:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    organizationName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
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
    areaCode:{
        type: Number,
        required: false,
    },
    disasterNature:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    threatLevel:{
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
    facilityName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    facLocation:{
        type: Array,
        required: false
    },
    facStatus:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    operEqu:{
        type: Number,
        required: false
    },
    inoperEqu:{
        type: Number,
        required: false
    },
    facilityDamage:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    reportStatus:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    facImage:{
        type: [String],
        required: false
    }
})

    
const DAFacility = mongoose.model( 'DAFacility', DAFacilitySchema);

module.exports =  DAFacility