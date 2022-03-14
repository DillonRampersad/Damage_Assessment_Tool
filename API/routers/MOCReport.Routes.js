const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();
const multer = require('multer');

const MOCReport = require('../db/models/MOCReports.model');

const MOCReportController = require('../controllers/MOCReport.controllers');

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
router.get('/MOCReport', MOCReportController.MOCReport_get_all)
router.get('/MOCReport/:mocreportID', MOCReportController.MOCReport_get_one)
//Post for Damage Assessment Form
router.post('/MOCReport', upload.array('mocImage'), MOCReportController.MOCReport_post);
//Patch for Damage Assessment Form
router.patch('/MOCReport/:id', MOCReportController.MOCReport_update);
//Delete for Damage Assessment Form
router.delete('/MOCReport/:id', MOCReportController.MOCReport_delete);

//Aggregation
router.get('/MOCReportCntRpts', MOCReportController.MOCReport_count_reports)
router.get('/MOCReportCntUnckRpts', MOCReportController.MOCReport_count_unchecked_reports)
router.get('/MOCReportCntCkRpts', MOCReportController.MOCReport_count_checked_reports)

router.post('/MOCReportDamage', MOCReportController.MOCReport_damage_search)



module.exports = router;