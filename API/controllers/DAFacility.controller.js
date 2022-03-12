const mongoose = require("mongoose");

const DAFacility = require("../db/models/DAFacility.model");

//Damage Assessment Form Get
exports.DAFacility_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  DAFacility.find({})
    .then((DAFacility) => {
      res.send(DAFacility);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.DAFacility_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  DAFacility.findOne({
    _id: req.params.DAFacilityID,
  })
    .then((DAFacility) => {
      res.send(DAFacility);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.DAFacility_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const facImage = req.files;
  console.log(req.files)
  let newDAFacility = new DAFacility({
    author: req.body.author,
    organizationName: req.body.organizationName,
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    area: req.body.area,
    areaCode: req.body.areaCode,
    disasterNature: req.body.disasterNature,
    threatLevel: req.body.threatLevel,
    surroundingDamage: req.body.surroundingDamage,
    facilityName: req.body.facilityName,
    facLocation: req.body.facLocation,
    facStatus: req.body.facStatus,
    operEqu: req.body.operEqu,
    inoperEqu: req.body.inoperEqu,
    facilityDamage: req.body.facilityDamage,
    reportStatus: req.body.reportStatus,
    facImage: req.files.map(facImage => facImage.path)
  });
  newDAFacility.save().then((DAFacilityDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(DAFacilityDoc);
  });
};

//Damage Assessment Form Update
exports.DAFacility_update = (req, res) => {
  //update the Organization specified
  DAFacility.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.DAFacility_delete = (req, res) => {
  //delete the Organization specified
  DAFacility.findOneAndRemove({
    _id: req.params.id,
  }).then((removeDAFacilityDoc) => {
    res.send(removeDAFacilityDoc);
  });
};


//Aggregation
exports.DAFacility_count_reports = (req, res) => {
  //delete the Organization specified
  DAFacility.aggregate([
    {
      '$project': {
        'eventName': 1, 
        'reportStatus': 1
      }
    }, {
      '$count': 'NoOfDaFacilityReports'
    }
  ]).then((DAFacility) => {
    res.send(DAFacility);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.DAFacility_count_unchecked_reports = (req, res) => {
  //delete the Organization specified
  DAFacility.aggregate([
    [
      {
        '$project': {
          'eventName': 1, 
          'reportStatus': 1
        }
      }, {
        '$match': {
          'reportStatus': 'Unchecked'
        }
      }, {
        '$count': 'noOfUncheckedReports'
      }
    ]
  ]).then((DAFacility) => {
    res.send(DAFacility);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.DAFacility_count_checked_reports = (req, res) => {
  //delete the Organization specified
  DAFacility.aggregate([
    [
      {
        '$project': {
          'eventName': 1, 
          'reportStatus': 1
        }
      }, {
        '$match': {
          'reportStatus': 'Checked'
        }
      }, {
        '$count': 'noOfCheckedReports'
      }
    ]
  ]).then((DAFacility) => {
    res.send(DAFacility);
  })
  .catch((e) => {
    res.send(e);
  });
};