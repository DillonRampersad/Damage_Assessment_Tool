//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM
const express = require('express')
const router = new express.Router();

const Administrator = require('../controllers/Administrator.controller');

const jwtHelper = require('../jwtHelper');


//Get for Damage Assessment Form
router.get('/Administrator', Administrator.administrator_get_all)
//router.get('/administrator/:administratorID', Administrator.administrator_get_one)
//Post for Damage Assessment Form
router.post('/Administrator', Administrator.administrator_post);
//Patch for Damage Assessment Form
//router.patch('/administrator/:id', Administrator.administrator_update);
//Delete for Damage Assessment Form
//router.delete('/administrator/:id', Administrator.administrator_delete);

//Auth
router.post('/authenticateA', Administrator.authenticate);
router.get('/userProfileA',jwtHelper.verifyJwtToken, Administrator.userProfile);


module.exports = router;