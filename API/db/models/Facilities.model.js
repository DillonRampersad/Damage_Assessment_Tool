const mongoose = require('mongoose');

const FacilitiesSchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    facilityDamage:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    location:{
        type: Array,
        required: false
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'DamageAssessments'
    }
})

    
const Facilities = mongoose.model( 'Facilities', FacilitiesSchema);

module.exports =  Facilities