//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=iz37fDe1XoM

const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();
const multer = require('multer');

const PreEquipment = require('../db/models/PreEquipment.model');

const PreEquipmentController = require('../controllers/PreEquipment.controller');

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
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'|| file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
 
 const upload = multer({storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 100
  },
  fileFilter: fileFilter});


  
//Get for Damage Assessment Form
router.get('/PreEquipment', PreEquipmentController.PreEquipment_get_all)
router.get('/PreEquipment/:PreEquipmentID', PreEquipmentController.PreEquipment_get_one)
//Post for Damage Assessment Form
router.post('/PreEquipment'
//,upload.array('equImage')
,upload.any('specSheet'), PreEquipmentController.PreEquipment_post);
//Patch for Damage Assessment Form
router.patch('/PreEquipment/:id', PreEquipmentController.PreEquipment_update);
//Delete for Damage Assessment Form
router.delete('/PreEquipment/:id', PreEquipmentController.PreEquipment_delete);


module.exports = router;