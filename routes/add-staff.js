const path = require('path');

const express = require('express');

const router = express.Router();


router.get("/admin", (req, res, next) => {
    // res.render("add-staff", {
    //     path : "/admin/add-staff",
    // })
    res.render("add-staff", {
        data: staff,
        path : "/admin/add-staff",
    });
})

module.exports = router;