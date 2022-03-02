const mongoose = require("mongoose");

const PreEquipmentSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  facilityName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  facilityContact: {
    type: String,
    required: true
  },
  equipmentName: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  equipmentType: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  modelNumber: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  manufacturer: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  manufacturerContact: {
    type: String,
    required: false
  },
  cost: {
    type: Number,
    required: false,
  },
  specSheet:{
    type: [String],
    required: false,
  }//,
  //equPreImage: {
  //  type: [String],
  //  required: false,
  //},
});

const PreEquipment = mongoose.model("PreEquipment", PreEquipmentSchema);

module.exports = PreEquipment;
