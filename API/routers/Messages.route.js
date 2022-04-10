//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM

const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();
const multer = require('multer');

const Messages = require('../db/models/Messages.model');

const MessagesController = require('../controllers/Messages.controller');

//multer image storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
         cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
         cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
 });
 const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
 
 const upload = multer({storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter});
  
//Get for Damage Assessment Form
router.get('/Messages', MessagesController.Messages_get_all)
router.get('/Messages/:MessagesID', MessagesController.Messages_get_one)
//Post for Damage Assessment Form
router.post('/Messages',upload.array('messageImage'), MessagesController.Messages_post);
//Patch for Damage Assessment Form
router.patch('/Messages/:id', MessagesController.Messages_update);
//Delete for Damage Assessment Form
router.delete('/Messages/:id', MessagesController.Messages_delete);

router.post('/MessageData', MessagesController.message_search)



module.exports = router;