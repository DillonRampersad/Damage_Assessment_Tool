//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM

const express = require('express')
const router = new express.Router();

const FieldAgentController = require('../controllers/FieldAgent.controller');

const jwtHelper = require('../jwtHelper');


//Get for Damage Assessment Form
router.get('/FieldAgents', FieldAgentController.FieldAgents_get_all)
//router.get('/FieldAgents/:FieldAgentsID', FieldAgentController.FieldAgents_get_one)
//Post for Damage Assessment Form
router.post('/FieldAgents', FieldAgentController.FieldAgents_post);
//Patch for Damage Assessment Form
//router.patch('/FieldAgents/:id', FieldAgentController.FieldAgents_update);
//Delete for Damage Assessment Form
//router.delete('/FieldAgents/:id', FieldAgentController.FieldAgents_delete);

//Auth
router.post('/authenticate', FieldAgentController.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, FieldAgentController.userProfile);


module.exports = router;