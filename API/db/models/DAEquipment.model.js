const mongoose = require("mongoose");

const DAEquipmentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  organizationName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  eventName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  disasterNature: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  facilityName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  facStatus: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
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
  equipmentStatus: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  partsReq: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  equipmentDamage: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  reportStatus: {
    type: String,
    required: false
  },
  equImage: {
    type: [String],
    required: false,
  },
});

const DAEquipment = mongoose.model("DAEquipment", DAEquipmentSchema);

module.exports = DAEquipment;
