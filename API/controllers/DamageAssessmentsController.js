const mongoose = require ('mongoose');

const DamageAssessments = require('../db/models/DamageAssessments.model');
const Facilities = require('../db/models/Facilities.model');
const Events = require('../db/models/Events.model');
const Equipment = require('../db/models/Equipment.model');
const Disasters = require('../db/models/Disasters.model');
const Organizations = require('../db/models/Organizations.model');


/*GET CONTROLLERS*/

exports.damageAssessment_get_all = (req, res) => {
    //return an array of all the damage assessments made that is stored on the database.
   DamageAssessments.find({})
   .then((damageAssessment) => {
       res.send(damageAssessment);
   }).catch((e) => {
       res.send(e);
   });
};

exports.damageAssessment_get_one = (req,res) => {
    //return an array of all the damage assessments made that is stored on the database.
   DamageAssessments.findOne({
       _id: req.params.damageAssessmentsID
    })
   //.populate('_damageAssessmentsID1').exec()
   .then((damageAssessment) => {
       res.send(damageAssessment);
   }).catch((e) => {
       res.send(e);
   });
};


exports.damageAssessmentOrganization_get_all = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Organizations.find({
        _damageAssessmentsID: req.params.damageAssessmentsID
    })
    .populate('_damageAssessmentsID')
    .then((organizations) => {
        res.send(organizations);
    }).catch((e) => {
        res.send(e);
    });
};

exports.damageAssessmentOrganization_get_one = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Organizations.findOne({
         _id: req.params.organizationID, 
         _damageAssessmentsID: req.params.damageAssessmentsID 
    })
    .populate('_damageAssessmentsID')
    .then((oneOrganizations) => {
        res.send(oneOrganizations);
    }).catch((e) => {
        res.send(e);
    });
};


exports.damageAssessmentFacilities_get_all = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Facilities.find({
        _damageAssessmentsID: req.params.damageAssessmentsID
    })
    .populate('_damageAssessmentsID')
    .then((facilities) => {
        res.send(facilities);
    }).catch((e) => {
        res.send(e);
    });
};

exports.damageAssessmentFacilities_get_one = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Facilities.findOne({
         _id: req.params.facilitiesID, 
         _damageAssessmentsID: req.params.damageAssessmentsID 
    })
    .populate('_damageAssessmentsID')
    .then((oneFacilities) => {
        res.send(oneFacilities);
    }).catch((e) => {
        res.send(e);
    });
};


exports.damageAssessmentEvents_get_all = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Events.find({
        _damageAssessmentsID: req.params.damageAssessmentsID
    })
    .populate('_damageAssessmentsID')
    .then((events) => {
        res.send(events);
    }).catch((e) => {
        res.send(e);
    });
};

exports.damageAssessmentEvents_get_one = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Events.findOne({
         _id: req.params.eventsID, 
         _damageAssessmentsID: req.params.damageAssessmentsID 
    })
    .populate('_damageAssessmentsID')
    .then((oneEvents) => {
        res.send(oneEvents);
    }).catch((e) => {
        res.send(e);
    });
};


exports.damageAssessmentDisasters_get_all = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Disasters.find({
        _damageAssessmentsID: req.params.damageAssessmentsID
    })
    .populate('_damageAssessmentsID')
    .then((events) => {
        res.send(events);
    }).catch((e) => {
        res.send(e);
    });
};

exports.damageAssessmentDisasters_get_one = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Disasters.findOne({
         _id: req.params.disastersID, 
         _damageAssessmentsID: req.params.damageAssessmentsID 
    })
    .populate('_damageAssessmentsID')
    .then((oneDisasters) => {
        res.send(oneDisasters);
    }).catch((e) => {
        res.send(e);
    });
};


exports.damageAssessmentEquipment_get_all = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Equipment.find({
        _damageAssessmentsID: req.params.damageAssessmentsID
    })
    .populate('_damageAssessmentsID')
    .then((equipment) => {
        res.send(equipment);
    }).catch((e) => {
        res.send(e);
    });
};

exports.damageAssessmentEquipment_get_one = (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Equipment.findOne({
         _id: req.params.equipmentID, 
         _damageAssessmentsID: req.params.damageAssessmentsID 
    })
    .populate('_damageAssessmentsID')
    .then((oneEquipment) => {
        res.send(oneEquipment);
    }).catch((e) => {
        res.send(e);
    });
};



/*POST CONTROLLERS*/
exports.damageAssessment_post = (req,res) => {
    //create a damage assessment report and save to the database
    let newDamageAssessment = new DamageAssessments({
        assessmentDescription: req.body.assessmentDescription,
        author: req.body.author,
        reportDateTime: req.body.reportDateTime
    });
    newDamageAssessment.save().then((DamageAssessmentDoc) => {
        //the full Damage Assessment document is returned (including id)
        res.send(DamageAssessmentDoc);
    })
 };


exports.damageAssessmentOrganizations_post = (req,res) => {
    //create a Organization report from a specific Damage Assessment and save to the database.
    let newOrganization = new Organizations({
        organizationName: req.body.organizationName,
        _damageAssessmentsID: req.params.damageAssessmentsID
    });
    newOrganization.save().then((OrganizationDoc) => {
        //the full Organization document is returned (including id)
        res.send(OrganizationDoc);
    })
};


exports.damageAssessmentFacilities_post = (req,res) => {
    //create a facilities from a specific Damage Assessment and save to the database.
    let newFacility = new Facilities({
        facilityName: req.body.facilityName,
        location: req.body.location,
        _damageAssessmentsID: req.params.damageAssessmentsID
    });
    newFacility.save().then((FacilityDoc) => {
        //the full Facility document is returned (including id)
        res.send(FacilityDoc);
    })
};


exports.damageAssessmentEvents_post = (req,res) => {
    //create a Events from a specific Damage Assessment and save to the database.
    let newEvent = new Events({
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        area: req.body.area,
        _damageAssessmentsID: req.params.damageAssessmentsID
    });
    newEvent.save().then((EventDoc) => {
        //the full Equipment document is returned (including id)
        res.send(EventDoc);
    })
};


exports.damageAssessmentDisasters_post = (req,res) => {
    //create a Disasters report from a specific Damage Assessment and save to the database.
    let newDisaster = new Disasters({
        disasterNature: req.body.disasterNature,
        threatLevel: req.body.threatLevel,
        surroundingDamage: req.body.surroundingDamage,
        _damageAssessmentsID: req.params.damageAssessmentsID
    });
    newDisaster.save().then((DisasterDoc) => {
        //the full Equipment document is returned (including id)
        res.send(DisasterDoc);
    })
};


exports.damageAssessmentEquipment_post = (req,res) => {
    //create a Equipment report from a specific Damage Assessment and save to the database.
    let newEquipment = new Equipment({
        equipmentName: req.body.equipmentName,
        equipmentType: req.body.equipmentType,
        modelNumber: req.body.modelNumber,
        manufacturer: req.body.area,
        cost: req.body.facilityName,
        location: req.body.location,
        _damageAssessmentsID: req.params.damageAssessmentsID
    });
    newEquipment.save().then((EquipmentDoc) => {
        //the full Equipment document is returned (including id)
        res.send(EquipmentDoc);
    })
};



/*UPDATE CONTROLLERS*/
exports.damageAssessment_update = (req,res) => {
    //update the Organization specified
    DamageAssessments.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() => {
        res.send({'message' : "Updated Successfully"});
    });
 };


exports.damageAssessmentOrganizations_update = (req,res) => {
    //update a specific facility specified by organization id
    Organizations.findOneAndUpdate({
        _id: req.params.organizationsID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
};


exports.damageAssessmentFacilities_update = (req,res) => {
    //update a specific facility specified by organization id
    Facilities.findOneAndUpdate({
        _id: req.params.facilitiesID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
};


exports.damageAssessmentEvents_update = (req,res) => {
    //update a specific facility specified by organization id
    Events.findOneAndUpdate({
        _id: req.params.eventsID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
};


exports.damageAssessmentDisasters_update = (req,res) => {
    //update a specific facility specified by organization id
    Disasters.findOneAndUpdate({
        _id: req.params.disastersID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
};


exports.damageAssessmentEquipment_update = (req,res) => {
    //update a specific facility specified by organization id
    Equipment.findOneAndUpdate({
        _id: req.params.equipmentID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
};



/*DELETE CONTROLLERS*/
exports.damageAssessment_delete = (req,res) => {
    //delete the Organization specified
    DamageAssessments.findOneAndRemove({
        _id: req.params.id
    }).then((removeOrganizationDoc) => {
        res.send(removeOrganizationDoc);
    })
 }


exports.damageAssessmentOrganizations_delete = (req,res) => {
    //update a specific facility specified by organization id
    Organizations.findOneAndRemove({
        _id: req.params.organizationsID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    }).then((removedOrganizationDoc)=>{
        res.send(removedOrganizationDoc)
    })
};


exports.damageAssessmentFacilities_delete = (req,res) => {
    //update a specific facility specified by organization id
    Facilities.findOneAndRemove({
        _id: req.params.facilitiesID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    }).then((removedFacilityDoc)=>{
        res.send(removedFacilityDoc)
    })
};


exports.damageAssessmentEvents_delete = (req,res) => {
    //update a specific facility specified by organization id
    Events.findOneAndRemove({
        _id: req.params.eventsID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    }).then((removedEventDoc)=>{
        res.send(removedEventDoc)
    })
};


exports.damageAssessmentDisasters_delete = (req,res) => {
    //update a specific facility specified by organization id
    Disasters.findOneAndRemove({
        _id: req.params.disastersID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    }).then((removedDisasterDoc)=>{
        res.send(removedDisasterDoc)
    })
};


exports.damageAssessmentEquipment_delete = (req,res) => {
    //update a specific facility specified by organization id
    Equipment.findOneAndRemove({
        _id: req.params.equipmentID, 
        _damageAssessmentsID: req.params.damageAssessmentsID
    }).then((removedEquipmentDoc)=>{
        res.send(removedEquipmentDoc)
    })
};