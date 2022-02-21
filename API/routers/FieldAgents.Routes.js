const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();

const fieldAgents = require('../db/models/FieldAgents.model');

const FieldAgentController = require('../controllers/FieldAgent.controller');

//Get for Damage Assessment Form
router.get('/FieldAgents', FieldAgentController.FieldAgents_get_all)
//router.get('/FieldAgents/:FieldAgentsID', FieldAgentController.FieldAgents_get_one)
//Post for Damage Assessment Form
router.post('/FieldAgents', FieldAgentController.FieldAgents_post);
//Patch for Damage Assessment Form
//router.patch('/FieldAgents/:id', FieldAgentController.FieldAgents_update);
//Delete for Damage Assessment Form
//router.delete('/FieldAgents/:id', FieldAgentController.FieldAgents_delete);

module.exports = router;