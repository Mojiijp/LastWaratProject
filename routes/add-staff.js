const path = require('path');

const express = require('express');

const router = express.Router();

const staff_add = [];

const addstaffController = require('../controller/addstaff');

router.get('/add-staff',addstaffController.getAddStaff)

router.post('/add-staff',addstaffController.postAddStaff) 

module.exports = router
exports.staff_add = staff_add