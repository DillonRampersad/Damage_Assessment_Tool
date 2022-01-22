const mongoose = require('mongoose');

const OrganizationsSchema = new mongoose.Schema({
    organizationName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'DamageAssessments'
    }
})

    
const Organizations = mongoose.model( 'Organizations', OrganizationsSchema);

module.exports =  Organizations