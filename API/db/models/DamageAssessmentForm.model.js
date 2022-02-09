const mongoose = require('mongoose');

const DamageAssessmentFormSchema = new mongoose.Schema({
    author1:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    organizationName1:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    facilityName1:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    facilityDamage1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    location1:{
        type: Array,
        required: true
    },
    eventName1:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    eventDate1:{
        type: Date,
        required: true,
        default: Date.now
    },
    area1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    surroundingDamage1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    disasterNature1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    threatLevel1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    equipmentName1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    equipmentType1:{
        type: String,
        required: Facilities,
        minlength:1,
        trim: true
    },
    modelNumber1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    manufacturer1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    equipmentDamage1:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    }
})


const DamageAssessmentForm = mongoose.model('DamageAssessmentForm', DamageAssessmentFormSchema);

module.exports = DamageAssessmentForm