const express = require('express')
const mongoose = require ('mongoose');

const Organizations = require('../db/models/Organizations.model');
const Facilities = require('../db/models/Facilities.model');

const router = new express.Router();

//Routes for Organizations
router.get('/Organizations', (req,res) => {
     //return an array of all the damage assessments made that is stored on the database.
    Organizations.find({}).then((organization) => {
        res.send(organization);
    }).catch((e) => {
        res.send(e);
    });
})

router.post('/Organizations', (req,res) => {
    //create a damage assessment report and save to the database
    let organizationName = req.body.organizationName;
    let newOrganization = new Organizations({
        organizationName
    });
    newOrganization.save().then((OrganizationDoc) => {
        //the full Organization document is returned (including id)
        res.send(OrganizationDoc);
    })
});
router.patch('/Organizations/:id', (req,res) => {
    //update the Organization specified
    Organizations.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() => {
        res.send({'message' : "Updated Successfully"});
    });
});
router.delete('/Organizations/:id', (req,res) => {
    //delete the Organization specified
    Organizations.findOneAndRemove({
        _id: req.params.id
    }).then((removeOrganizationDoc) => {
        res.send(removeOrganizationDoc);
    })
});

//Routes for Organizations/:organizationID/Facilities
router.get('/Organizations/:organizationID/Facilities', (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Facilities.find({
        _organizationID: req.params.organizationID
    })
    .populate('_organizationID').exec()
    .then((facilities) => {
        res.send(facilities);
    }).catch((e) => {
        res.send(e);
    });
})
router.get('/Organizations/:organizationID/Facilities/:facilitiesID', (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Facilities.findOne({
         _id: req.params.facilitiesID, 
        _organizationID: req.params.organizationID 
    }).then((oneFacilities) => {
        res.send(oneFacilities);
    }).catch((e) => {
        res.send(e);
    });
})
router.post('/Organizations/:organizationID/Facilities', (req,res) => {
    //create a facilities from a specific organization and save to the database.
    let newFacility = new Facilities({
        facilityName: req.body.facilityName,
        location: req.body.location,
        _organizationID: req.params.organizationID
    });
    newFacility.save().then((FacilityDoc) => {
        //the full Facility document is returned (including id)
        res.send(FacilityDoc);
    })
})
router.patch('/Organizations/:organizationID/Facilities/:facilitiesID', (req,res) => {
    //update a specific facility specified by organization id
    Facilities.findOneAndUpdate({
        _id: req.params.facilitiesID, 
        _organizationID: req.params.organizationID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
});
router.delete('/Organizations/:organizationID/Facilities/:facilitiesID', (req,res) => {
    Facilities.findOneAndRemove({
        _id: req.params.facilitiesID, 
        _organizationID: req.params.organizationID
    }).then((removedFacilityDoc)=>{
        res.send(removedFacilityDoc)
    })
});



//_____________Facilities__________________
//Routes for Facilities
router.get('/Facilities', (req,res) => {
    //return an array of all the damage assessments made that is stored on the database.
    Facilities.find({}).populate('_organizationID')
    .then((facility) => {
        res.send(facility);
    }).catch((e) => {
        res.send(e);
    });
})
router.patch('/Facilities/:id', (req,res) => {
    //update the Organization specified
    Facilities.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() => {
        res.send({'message' : "Updated Successfully"});
    });
});
router.delete('/Facilities/:id', (req,res) => {
    //delete the Organization specified
    Facilities.findOneAndRemove({
        _id: req.params.id
    }).then((removeFacilityDoc) => {
        res.send(removeFacilityDoc);
    })
});


module.exports = router;

