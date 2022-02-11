const express = require('express')
const mongoose = require ('mongoose');
const router = new express.Router();

const MOCReport = require('../db/models/MOCReports.model');

const MOCReportController = require('../controllers/MOCReport.controllers');

//Get for Damage Assessment Form
router.get('/MOCReport', MOCReportController.MOCReport_get_all)
router.get('/MOCReport/:mocreportID', MOCReportController.MOCReport_get_one)
//Post for Damage Assessment Form
router.post('/MOCReport', MOCReportController.MOCReport_post);
//Patch for Damage Assessment Form
router.patch('/MOCReport/:id', MOCReportController.MOCReport_update);
//Delete for Damage Assessment Form
router.delete('/MOCReport/:id', MOCReportController.MOCReport_delete);


module.exports = router;