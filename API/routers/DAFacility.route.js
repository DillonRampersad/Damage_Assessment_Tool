const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();
const multer = require('multer');

const DAFacility = require('../db/models/DAFacility.model');

const DAFacilityController = require('../controllers/DAFacility.controller');

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
router.get('/DAFacility', DAFacilityController.DAFacility_get_all)
router.get('/DAFacility/:DAFacilityID', DAFacilityController.DAFacility_get_one)
//Post for Damage Assessment Form
router.post('/DAFacility', upload.array('facImage'), DAFacilityController.DAFacility_post);
//Patch for Damage Assessment Form
router.patch('/DAFacility/:id', DAFacilityController.DAFacility_update);
//Delete for Damage Assessment Form
router.delete('/DAFacility/:id', DAFacilityController.DAFacility_delete);

//Aggregation
router.get('/DAFacilityCntRpts', DAFacilityController.DAFacility_count_reports)
router.get('/DAFacilityCntUnckRpts', DAFacilityController.DAFacility_count_unchecked_reports)
router.get('/DAFacilityCntCkRpts', DAFacilityController.DAFacility_count_checked_reports)

router.post('/DAFacilityDamage', DAFacilityController.DAFacility_damage_search)

module.exports = router;