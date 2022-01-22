const mongoose = require('mongoose');

const MoCReportSchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    MoCDescription:{
        type: String,
        required: false
    },
    MoCReportDateTime:{
        type: Date,
        required: true,
        default: Date.now
    },
    MoCDisasterLocation:{
        type: Array,
        required: true,
    },
    _membersofCommunitiesID:{
        type: mongoose.Types.ObjectId,
        required: true
    }
})

    
const MoCReport = mongoose.model( 'MoCReport', MoCReportSchema);

module.exports =  MoCReport