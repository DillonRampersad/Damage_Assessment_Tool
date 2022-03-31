//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM

const mongoose = require("mongoose");

const PreEquipment = require("../db/models/PreEquipment.model");

//Damage Assessment Form Get
exports.PreEquipment_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  PreEquipment.find({})
    .then((PreEquipment) => {
      res.send(PreEquipment);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.PreEquipment_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  PreEquipment.findOne({
    _id: req.params.PreEquipmentID,
  })
    .then((PreEquipment) => {
      res.send(PreEquipment);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.PreEquipment_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const equImage = req.files;
  console.log(req.files)
  let newPreEquipment = new PreEquipment({
    organizationName: req.body.organizationName,
    facilityName: req.body.facilityName,
    facilityContact: req.body.facilityContact,
    equipmentName: req.body.equipmentName,
    equipmentType: req.body.equipmentType,
    modelNumber: req.body.modelNumber,
    manufacturer: req.body.manufacturer,
    manufacturerContact: req.body.manufacturerContact,
    cost: req.body.cost,
    specSheet: req.files.map(specSheet => specSheet.path),
    //equPreImage: req.files.map(equImage => equImage.path)
  });
  newPreEquipment.save().then((PreEquipmentDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(PreEquipmentDoc);
  });
};

//Damage Assessment Form Update
exports.PreEquipment_update = (req, res) => {
  //update the Organization specified
  PreEquipment.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.PreEquipment_delete = (req, res) => {
  //delete the Organization specified
  PreEquipment.findOneAndRemove({
    _id: req.params.id,
  }).then((removePreEquipmentDoc) => {
    res.send(removePreEquipmentDoc);
  });
};
