const path = require('path');
const express = require('express');

const router = express.Router();

const addstaffController = require('../controller/addstaff');

router.get('/staff',addstaffController.getStaff)

module.exports = router;