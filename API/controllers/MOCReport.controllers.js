const mongoose = require("mongoose");

const MOCReport = require("../db/models/MOCReports.model");

//Damage Assessment Form Get
exports.MOCReport_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  MOCReport.find({})
    .then((mocreport) => {
      res.send(mocreport);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.MOCReport_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  MOCReport.findOne({
    _id: req.params.mocreportsID,
  })
    .then((mocreport) => {
      res.send(mocreport);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.MOCReport_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const mocImage = req.files;
  //console.log(mocImage.filename);
  console.log(req.files)
  //if(!mocImage){
  //    const error = new Error('Please upload an image');
  //    error.httpStatusCode = 400
  //    return next (error)
  //}
  //var path = req.files.map(mocImage => file.path)
  let newMOCReport = new MOCReport({
    facilityName: req.body.facilityName,
    MoCDescription: req.body.MoCDescription,
    MoCReportDateTime: req.body.MoCReportDateTime,
    MoCDisasterLocation: req.body.MoCDisasterLocation,
    mocImage: req.files.map(mocImage => mocImage.path)
  });
  newMOCReport.save().then((MOCReportDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(MOCReportDoc);
  });
};

//Damage Assessment Form Update
exports.MOCReport_update = (req, res) => {
  //update the Organization specified
  MOCReport.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.MOCReport_delete = (req, res) => {
  //delete the Organization specified
  MOCReport.findOneAndRemove({
    _id: req.params.id,
  }).then((removeMOCReportDoc) => {
    res.send(removeMOCReportDoc);
  });
};
