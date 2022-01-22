const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    equipmentName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    equipmentType:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    modelNumber:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    manufacturer:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    cost:{
        type: Number,
        required: false
    },
    location:{
        type: Array,
        required: true,
    },/*
    _facilityID:{
        type: mongoose.Types.ObjectId,
        required: true
    },*/
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'DamageAssessments'
    }
})

    
const Equipment = mongoose.model( 'Equipment', EquipmentSchema);

module.exports =  Equipment