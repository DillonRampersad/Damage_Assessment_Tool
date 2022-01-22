const mongoose = require('mongoose');

const AdministratorsSchema = new mongoose.Schema({
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
    classType:{
        type: Number,
        required: true,
        default: 4
    }
})

    
const Administrators = mongoose.model( 'Administrators', AdministratorsSchema);

module.exports =  Administrators