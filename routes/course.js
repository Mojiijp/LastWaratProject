const express = require('express');

const router = express.Router();

const coursesControler = require('../controller/course')

router.get('/course', coursesControler.getCourses)

// router.get('/course', (req, res, next) => {
//     res.render("course", {
//         path : '/course'
//     })
// })

// router.get("/course",(req, res, next) => {
//     res.render("cscourse", {
//         path : '/course'
//     })
//     // res.redirect("/course/cscourse")
// })
  
module.exports = router;