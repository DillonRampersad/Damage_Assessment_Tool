const mongoose = require('mongoose');

const FieldAgentsSchema = new mongoose.Schema({
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
    email:{
        type: String,
        required: true,
        minlength:1,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength:8
    },
    employeeID:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
    /*,
    _organizationID:{
        type: mongoose.Types.ObjectId,
        required: true
    }*/
});

    
const FieldAgents = mongoose.model( 'FieldAgents', FieldAgentsSchema);

module.exports =  FieldAgents