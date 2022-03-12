const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();
const multer = require('multer');

const DAEquipment = require('../db/models/DAEquipment.model');

const DAEquipmentController = require('../controllers/DAEquipment.controller');

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
router.get('/DAEquipment', DAEquipmentController.DAEquipment_get_all)
router.get('/DAEquipment/:DAEquipmentID', DAEquipmentController.DAEquipment_get_one)
//Post for Damage Assessment Form
router.post('/DAEquipment', upload.array('equImage'), DAEquipmentController.DAEquipment_post);
//Patch for Damage Assessment Form
router.patch('/DAEquipment/:id', DAEquipmentController.DAEquipment_update);
//Delete for Damage Assessment Form
router.delete('/DAEquipment/:id', DAEquipmentController.DAEquipment_delete);

//Aggregation
router.get('/DAEquipmentCntRpts', DAEquipmentController.DAEquipment_count_reports)
router.get('/DAEquipmentCntUnckRpts', DAEquipmentController.DAEquipment_count_unchecked_reports)
router.get('/DAEquipmentCntCkRpts', DAEquipmentController.DAEquipment_count_checked_reports)

module.exports = router;