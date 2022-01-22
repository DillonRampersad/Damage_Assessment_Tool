const express = require('express')
const mongoose = require ('mongoose');

const Events = require('../db/models/Events.model');

const router = new express.Router();

//Routes for Events
router.get('/Events', (req,res) => {
    //return an array of all the damage assessments made that is stored on the database.
    Events.find({}).then((event) => {
        res.send(event);
    }).catch((e) => {
        res.send(e);
    });
})
router.post('/Events', (req,res) => {
    //create a damage assessment report and save to the database
    let eventName = req.body.eventName;
    let eventDate = req.body.eventDate;
    let location = req.body.location

    let newEvent = new Events({
        eventName,
        eventDate,
        location
    });
    newEvent.save().then((EventDoc) => {
        //the full Organization document is returned (including id)
        res.send(EventDoc);
    })
});
router.patch('/Events/:id', (req,res) => {
    //update the Organization specified
    Events.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() => {
        res.send({'message' : "Updated Successfully"});
    });
});
router.delete('/Events/:id', (req,res) => {
    //delete the Organization specified
    Events.findOneAndRemove({
        _id: req.params.id
    }).then((removeEventDoc) => {
        res.send(removeEventDoc);
    })
});


/*ROUTE HANDLERS*/
/*

//_____________Events__________________
//Routes for Events

//Routes for Events/:eventID/Disasters
app.get('/Events/:eventID/Disasters', (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Disasters.find({
        _eventID: req.params.eventID
    }).then((disasters) => {
        res.send(disasters);
    }).catch((e) => {
        res.send(e);
    });
})
app.get('/Events/:eventID/Disasters/:disasterID', (req,res) => {
    //return an array of all the facilities from a specific organization made that is stored on the database.
    Disasters.findOne({
         _id: req.params.facilitiesID, 
        _eventID: req.params.eventID 
    }).then((oneDisasters) => {
        res.send(oneDisasters);
    }).catch((e) => {
        res.send(e);
    });
})
app.post('/Events/:eventID/Disasters', (req,res) => {
    //create a facilities from a specific organization and save to the database.
    let newDisaster = new Disasters({
        disasterNature: req.body.disasterNature,
        threatLevel: req.body.threatLevel,
        surroundingDamage: req.body.surroundingDamage,
        _eventID: req.params.eventID
    });
    newDisaster.save().then((DisasterDoc) => {
        //the full Facility document is returned (including id)
        res.send(DisasterDoc);
    })
})
app.patch('/Events/:eventID/Disasters/:disasterID', (req,res) => {
    //update a specific facility specified by organization id
    Disasters.findOneAndUpdate({
        _id: req.params.disasterID, 
        _eventID: req.params.eventID
    },{
        $set: req.body
    }).then(() => {
        res.send({message: "Updated Successfully."})
    })
});
app.delete('/Events/:eventID/Disasters/:disasterID', (req,res) => {
    Disasters.findOneAndRemove({
        _id: req.params.disasterID, 
        _eventID: req.params.eventID
    }).then((removedDisasterDoc)=>{
        res.send(removedDisasterDoc)
    })
});

*/


module.exports = router;