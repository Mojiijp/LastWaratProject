const path = require('path');

const express = require('express');

const router = express.Router();


router.get("/course", (req, res, next) => {
    // res.render("add-staff", {
    //     path : "/admin/add-staff",
    // })
    res.render("cscourse", {
        path : "/course/cscourse",
    });
})

module.exports = router;