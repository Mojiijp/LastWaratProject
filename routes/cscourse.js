const path = require('path');

const express = require('express');
const fs = require('fs');

const router = express.Router();

const coursesController = require('../controller/course')

router.get('/cs:id', coursesController.getCoursesDetail)
  

module.exports = router;



