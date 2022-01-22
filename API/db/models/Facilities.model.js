const mongoose = require('mongoose');

const FacilitiesSchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    location:{
        type: Array,
        required: true
    },/*
    _organizationID:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Organizations"
    },*/
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'DamageAssessments'
    }
})

    
const Facilities = mongoose.model( 'Facilities', FacilitiesSchema);

module.exports =  Facilities