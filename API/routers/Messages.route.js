const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();

const Messages = require('../db/models/Messages.model');

const MessagesController = require('../controllers/Messages.controller');

  
//Get for Damage Assessment Form
router.get('/Messages', MessagesController.Messages_get_all)
router.get('/Messages/:MessagesID', MessagesController.Messages_get_one)
//Post for Damage Assessment Form
router.post('/Messages', MessagesController.Messages_post);
//Patch for Damage Assessment Form
router.patch('/Messages/:id', MessagesController.Messages_update);
//Delete for Damage Assessment Form
router.delete('/Messages/:id', MessagesController.Messages_delete);


module.exports = router;