const mongoose = require('mongoose');

const DisastersSchema = new mongoose.Schema({
    disasterNature:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    threatLevel:{
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

    
const Disasters = mongoose.model( 'Disasters', DisastersSchema);

module.exports =  Disasters