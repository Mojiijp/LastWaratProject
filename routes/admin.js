const express = require('express');

const router = express.Router();

const adminController = require('../controller/addstaff')

router.get('/admin', adminController.getAdmin)

router.post('/admin', adminController.postAdmin)

module.exports = router;
