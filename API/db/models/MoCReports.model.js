//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

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
        required: true
    },
    MoCReportDateTime:{
        type: Date,
        required: false,
        default: Date.now
    },
    MoCDisasterLocation:{
        type: String,
        required: false
    },
    reportStatus:{
        type: String,
        default:"Unchecked"
    },
    mocImage:{
        type: [String],
        required: false
    }
})

    
const MoCReport = mongoose.model( 'MoCReport', MoCReportSchema);

module.exports =  MoCReport