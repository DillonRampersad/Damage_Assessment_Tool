const express = require('express')
const router = new express.Router();

const MOCcontroller = require('../controllers/MOC.controller');

const jwtHelper = require('../jwtHelper');


//Get for Damage Assessment Form
router.get('/MembersOfCommunities', MOCcontroller.memberOfCommunities_get_all)
//router.get('/MembersOfCommunities/:MembersOfCommunitiesID', MOCcontroller.MembersOfCommunities_get_one)
//Post for Damage Assessment Form
router.post('/MembersOfCommunities', MOCcontroller.memberOfCommunities_post);
//Patch for Damage Assessment Form
//router.patch('/MembersOfCommunities/:id', MOCcontroller.MembersOfCommunities_update);
//Delete for Damage Assessment Form
//router.delete('/MembersOfCommunities/:id', MOCcontroller.MembersOfCommunities_delete);

//Auth
router.post('/authenticateMOC', MOCcontroller.authenticate);
router.get('/userProfileMOC',jwtHelper.verifyJwtToken, MOCcontroller.userProfile);


module.exports = router;