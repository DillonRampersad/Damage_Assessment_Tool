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
        required: false
    }, //remove when finished testing
    _organizationID:{
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
        ref: "Organizations"
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'DamageAssessments'
    }
})

    
const Facilities = mongoose.model( 'Facilities', FacilitiesSchema);

module.exports =  Facilities