//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const mongoose = require("mongoose");

const PreFacilitySchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  manager: {
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
  area: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  areaCode: {
    type: Number,
    required: false
  },
  facLocation: {
    type: Array,
    required: false,
  },
  facilityContact: {
    type: String,
    required: true,
  },
  noOfEqu: {
    type: Number,
    required: false,
  },
  noOfEmployees: {
    type: Number,
    required: false,
  },
  buildingManufacturer: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  manufacturerContact: {
    type: String,
    required: false,
  },
  cost: {
    type: Number,
    required: false,
  },
  floorPlan: {
    type: [String],
    required: false,
  },
});

const PreFacility = mongoose.model("PreFacility", PreFacilitySchema);

module.exports = PreFacility;
