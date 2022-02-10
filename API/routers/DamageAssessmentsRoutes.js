const express = require('express')
const mongoose = require ('mongoose');

const DamageAssessments = require('../db/models/DamageAssessments.model');
const Facilities = require('../db/models/Facilities.model');
const Events = require('../db/models/Events.model');
const Equipment = require('../db/models/Equipment.model');
const Disasters = require('../db/models/Disasters.model');
const Organizations = require('../db/models/Organizations.model');
const DamageAssessmentForm = require('../db/models/DamageAssessmentForm.model');

const router = new express.Router();

//Import Controllers
const DamageAssessmentController = require('../controllers/DamageAssessmentsController');


//Creating a Damage Assessment Report
router.post('/DamageAssessments', DamageAssessmentController.damageAssessment_post);

router.post('/DamageAssessments/:damageAssessmentsID/Organizations', DamageAssessmentController.damageAssessmentOrganizations_post);

router.post('/DamageAssessments/:damageAssessmentsID/Facilities', DamageAssessmentController.damageAssessmentFacilities_post);

router.post('/DamageAssessments/:damageAssessmentsID/Events', DamageAssessmentController.damageAssessmentEvents_post);

router.post('/DamageAssessments/:damageAssessmentsID/Disasters', DamageAssessmentController.damageAssessmentDisasters_post);

router.post('/DamageAssessments/:damageAssessmentsID/Equipment', DamageAssessmentController.damageAssessmentEquipment_post);



/*GET ROUTES*/ 
//Routes for get DamageAssessments
router.get('/DamageAssessments', DamageAssessmentController.damageAssessment_get_all);
router.get('/DamageAssessments/:damageAssessmentsID', DamageAssessmentController.damageAssessment_get_one);

//Routes for /DamageAssessments/:damageAssessmentsID/Organizations
router.get('/DamageAssessments/:damageAssessmentsID/Organizations', DamageAssessmentController.damageAssessmentOrganization_get_all);
router.get('/DamageAssessments/:damageAssessmentsID/Organizations/:organizationID', DamageAssessmentController.damageAssessmentOrganization_get_one);

router.get('/DamageAssessments/:damageAssessmentsID/Facilities', DamageAssessmentController.damageAssessmentFacilities_get_all);
router.get('/DamageAssessments/:damageAssessmentsID/Facilities/:faciltiesID', DamageAssessmentController.damageAssessmentFacilities_get_one);

router.get('/DamageAssessments/:damageAssessmentsID/Events', DamageAssessmentController.damageAssessmentEvents_get_all);
router.get('/DamageAssessments/:damageAssessmentsID/Events/:eventsID', DamageAssessmentController.damageAssessmentEvents_get_one);

router.get('/DamageAssessments/:damageAssessmentsID/Disasters', DamageAssessmentController.damageAssessmentDisasters_get_all);
router.get('/DamageAssessments/:damageAssessmentsID/Disasters/:disastersID', DamageAssessmentController.damageAssessmentDisasters_get_one);

router.get('/DamageAssessments/:damageAssessmentsID/Equipment', DamageAssessmentController.damageAssessmentEquipment_get_all)
router.get('/DamageAssessments/:damageAssessmentsID/Equipment/:equipmentID', DamageAssessmentController.damageAssessmentEquipment_get_one);


/* PATCH ROUTES*/
router.patch('/DamageAssessments/:id', DamageAssessmentController.damageAssessment_update);

router.patch('/DamageAssessments/:damageAssessmentsID/Organizations/:id', DamageAssessmentController.damageAssessmentOrganizations_update);

router.patch('/DamageAssessments/:damageAssessmentsID/Facilities/:id', DamageAssessmentController.damageAssessmentFacilities_update);

router.patch('/DamageAssessments/:damageAssessmentsID/Events/:id', DamageAssessmentController.damageAssessmentEvents_update);

router.patch('/DamageAssessments/:damageAssessmentsID/Disasters/:id', DamageAssessmentController.damageAssessmentDisasters_update);

router.patch('/DamageAssessments/:damageAssessmentsID/Equipment/:id', DamageAssessmentController.damageAssessmentEquipment_update);



/* DELETE ROUTES*/
router.delete('/DamageAssessments/:id', DamageAssessmentController.damageAssessment_delete);

router.delete('/DamageAssessments/:damageAssessmentsID/Organizations/:id', DamageAssessmentController.damageAssessmentOrganizations_delete);

router.delete('/DamageAssessments/:damageAssessmentsID/Facilities/:id', DamageAssessmentController.damageAssessmentFacilities_delete);

router.delete('/DamageAssessments/:damageAssessmentsID/Events/:id', DamageAssessmentController.damageAssessmentEvents_delete);

router.delete('/DamageAssessments/:damageAssessmentsID/Disasters/:id', DamageAssessmentController.damageAssessmentDisasters_delete);

router.delete('/DamageAssessments/:damageAssessmentsID/Equipment/:id', DamageAssessmentController.damageAssessmentEquipment_delete);


//Get for Damage Assessment Form
router.get('/DamageAssessmentForm', DamageAssessmentController.damageAssessmentForm_get_all)
router.get('/DamageAssessmentForm/:damageAssessmentFormID', DamageAssessmentController.damageAssessmentForm_get_one)
//Post for Damage Assessment Form
router.post('/DamageAssessmentForm', DamageAssessmentController.damageAssessmentForm_post);
//Patch for Damage Assessment Form
router.patch('/DamageAssessmentForm/:id', DamageAssessmentController.damageAssessmentForm_update);
//Delete for Damage Assessment Form
router.delete('/DamageAssessmentForm/:id', DamageAssessmentController.damageAssessmentForm_delete);

module.exports = router;