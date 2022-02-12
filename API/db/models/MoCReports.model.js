const mongoose = require('mongoose');

const MoCReportSchema = new mongoose.Schema({
    facilityName:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    MoCDescription:{
        type: String,
        required: false
    },
    MoCReportDateTime:{
        type: Date,
        required: false,
        default: Date.now
    },
    MoCDisasterLocation:{
        type: Array,
        required: false,
    },
    mocImage:{
        type: String,
        required: false
    },
    _membersofCommunitiesID:{
        type: mongoose.Types.ObjectId,
        required: false
    }
})

    
const MoCReport = mongoose.model( 'MoCReport', MoCReportSchema);

module.exports =  MoCReport