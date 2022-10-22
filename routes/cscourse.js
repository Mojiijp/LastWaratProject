const path = require('path');

const express = require('express');
const fs = require('fs');

const router = express.Router();


// router.get("/course", (req, res, next) => {
//     // res.render("add-staff", {
//     //     path : "/admin/add-staff",
//     // })
//     res.render("cscourse", {
//         path : "/course/cscourse",
//     });
// })

router.get("/course/(:course_id)", (req, res, next) => {
    let id = req.params.course_id;
    let idsub = id.substring(0);
    fs.readFile("course.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        let datacourse = JSON.parse(data);
        res.render("cscourse", { 
            data: datacourse, 
            id: idsub });
      }
    });
  });
  

module.exports = router;