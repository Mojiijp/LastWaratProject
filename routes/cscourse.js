const path = require('path');

const express = require('express');
const fs = require('fs');

const router = express.Router();

const coursesController = require('../controller/course')

router.get('/cs:id', coursesController.getCoursesDetail)
  

module.exports = router;

// router.get("/course/(:course_id)", (req, res, next) => {
//     let id = req.params.course_id;
//     let idsub = id.substring(0);
//     fs.readFile("course.json", (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         let datacourse = JSON.parse(data);
//         res.render("cscourse", { 
//             data: datacourse, 
//             id: idsub });
//       }
//     });
//   });


