const mongoose = require('mongoose');

const DamageAssessmentsSchema = new mongoose.Schema({
    assessmentDescription:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    author:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    reportDateTime:{
        type: Date,
        required: true,
        default: Date.now
    }
})


const DamageAssessments = mongoose.model('DamageAssessments', DamageAssessmentsSchema);

module.exports = DamageAssessments