const express = require('express')
const router = new express.Router();

const TwitterController = require('../controllers/Twitter.controller');



router.get('/Twitter', TwitterController.Twitter_get_all)



module.exports = router;