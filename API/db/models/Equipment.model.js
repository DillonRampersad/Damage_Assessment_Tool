//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    equipmentName:{
        type: String,
        required: false,
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
        required: false,
        minlength:1,
        trim: true
    },
    equipmentDamage:{
        type: String,
        required: false,
        minlength:1,
        trim: true
    },
    _damageAssessmentsID:{
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'DamageAssessments'
    }
})

    
const Equipment = mongoose.model( 'Equipment', EquipmentSchema);

module.exports =  Equipment