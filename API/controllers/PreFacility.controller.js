const mongoose = require("mongoose");

const PreFacility = require("../db/models/PreFacility.model");

//Damage Assessment Form Get
exports.PreFacility_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  PreFacility.find({})
    .then((PreFacility) => {
      res.send(PreFacility);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.PreFacility_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  PreFacility.findOne({
    _id: req.params.PreFacilityID,
  })
    .then((PreFacility) => {
      res.send(PreFacility);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.PreFacility_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const floorPlan = req.files;
  console.log(req.files)
  let newPreFacility = new PreFacility({
    organizationName: req.body.organizationName,
    manager: req.body.manager,
    facilityName: req.body.facilityName,
    area: req.body.area,
    areaCode: req.body.areaCode,
    facLocation: req.body.facLocation,
    facilityContact: req.body.facilityContact,
    noOfEqu: req.body.noOfEqu,
    noOfEmployees: req.body.noOfEmployees,
    buildingManufacturer: req.body.buildingManufacturer,
    manufacturerContact: req.body.manufacturerContact,
    cost: req.body.cost,
    floorPlan: req.files.map(floorPlan => floorPlan.path),
    //equPreImage: req.files.map(equImage => equImage.path)
  });
  newPreFacility.save().then((PreFacilityDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(PreFacilityDoc);
  });
};

//Damage Assessment Form Update
exports.PreFacility_update = (req, res) => {
  //update the Organization specified
  PreFacility.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.PreFacility_delete = (req, res) => {
  //delete the Organization specified
  PreFacility.findOneAndRemove({
    _id: req.params.id,
  }).then((removePreFacilityDoc) => {
    res.send(removePreFacilityDoc);
  });
};
