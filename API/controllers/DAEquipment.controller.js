const mongoose = require("mongoose");

const DAEquipment = require("../db/models/DAEquipment.model");

//Damage Assessment Form Get
exports.DAEquipment_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  DAEquipment.find({})
    .then((DAEquipment) => {
      res.send(DAEquipment);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.DAEquipment_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  DAEquipment.findOne({
    _id: req.params.DAEquipmentID,
  })
    .then((DAEquipment) => {
      res.send(DAEquipment);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.DAEquipment_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const equImage = req.files;
  console.log(req.files)
  let newDAEquipment = new DAEquipment({
    author: req.body.author,
    organizationName: req.body.organizationName,
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    disasterNature: req.body.disasterNature,
    facilityName: req.body.facilityName,
    facStatus: req.body.facStatus,
    equipmentName: req.body.equipmentName,
    equipmentType: req.body.equipmentType,
    modelNumber: req.body.modelNumber,
    manufacturer: req.body.manufacturer,
    equipmentStatus: req.body.equipmentStatus,
    partsReq: req.body.partsReq,
    equipmentDamage: req.body.equipmentDamage,
    reportStatus: req.body.reportStatus,
    equImage: req.files.map(equImage => equImage.path)
  });
  newDAEquipment.save().then((DAEquipmentDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(DAEquipmentDoc);
  });
};

//Damage Assessment Form Update
exports.DAEquipment_update = (req, res) => {
  //update the Organization specified
  DAEquipment.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.DAEquipment_delete = (req, res) => {
  //delete the Organization specified
  DAEquipment.findOneAndRemove({
    _id: req.params.id,
  }).then((removeDAEquipmentDoc) => {
    res.send(removeDAEquipmentDoc);
  });
};

//Aggregation
exports.DAEquipment_count_reports = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    {
      '$project': {
        'eventName': 1, 
        'reportStatus': 1
      }
    }, {
      '$count': 'NoOfDAEquipmentReports'
    }
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.DAEquipment_count_unchecked_reports = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
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
        '$count': 'noOfUncheckedEqReports'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.DAEquipment_count_checked_reports = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
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
        '$count': 'noOfCheckedEqReports'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};


exports.DAEquipment_damage_search = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    [
      {
        '$match': {
            '$or': [
               {'equipmentDamage':{ '$regex':'.*' + req.body.equipmentDamage + '.*','$options': 'i' } }
            ]
        }
    }
  ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
    console.log(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.huawei_search = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    [
      {
        '$match': {
          '$or': [
            {
              'manufacturer': {
                '$regex': 'h', 
                '$options': 'i'
              }
            }
          ]
        }
      }, {
        '$count': 'huawei'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
    console.log(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.cisco_search = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    [
      {
        '$match': {
          '$or': [
            {
              'manufacturer': {
                '$regex': 'ci', 
                '$options': 'i'
              }
            }
          ]
        }
      }, {
        '$count': 'cisco'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
    console.log(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.TelecomCompany_search = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    [
      {
        '$match': {
          '$or': [
            {
              'manufacturer': {
                '$regex': 'te', 
                '$options': 'i'
              }
            }
          ]
        }
      }, {
        '$count': 'telecomco'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
    console.log(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};

exports.JN_search = (req, res) => {
  //delete the Organization specified
  DAEquipment.aggregate([
    [
      {
        '$match': {
          '$or': [
            {
              'manufacturer': {
                '$regex': 'j', 
                '$options': 'i'
              }
            }
          ]
        }
      }, {
        '$count': 'jn'
      }
    ]
  ]).then((DAEquipment) => {
    res.send(DAEquipment);
    console.log(DAEquipment);
  })
  .catch((e) => {
    res.send(e);
  });
};
