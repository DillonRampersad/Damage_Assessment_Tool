const mongoose = require('mongoose');

const DisasterManagersSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    employeeID:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    classType:{
        type: Number,
        required: true,
        default: 2
    },
    _organizationID:{
        type: mongoose.Types.ObjectId,
        required: true
    }
})

    
const DisasterManagers = mongoose.model( 'DisasterManagers', DisasterManagersSchema);

module.exports =  DisasterManagers