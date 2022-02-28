const express = require('express')
const router = new express.Router();

const DisasterManagerController = require('../controllers/DisasterManager.controller');

const jwtHelper = require('../jwtHelper');


//Get for Damage Assessment Form
router.get('/DisasterManager', DisasterManagerController.disasterManager_get_all)
//router.get('/disasterManager/:disasterManagerID', DisasterManagerController.disasterManager_get_one)
//Post for Damage Assessment Form
router.post('/DisasterManager', DisasterManagerController.disasterManager_post);
//Patch for Damage Assessment Form
//router.patch('/disasterManager/:id', DisasterManagerController.disasterManager_update);
//Delete for Damage Assessment Form
//router.delete('/disasterManager/:id', DisasterManagerController.disasterManager_delete);

//Auth
router.post('/authenticateDM', DisasterManagerController.authenticate);
router.get('/userProfileDM',jwtHelper.verifyJwtToken, DisasterManagerController.userProfile);


module.exports = router;