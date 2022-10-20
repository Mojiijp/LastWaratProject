const express = require('express');

const router = express.Router();

router.get('/admin', (req, res, next) => {
    res.render("admin", {
        path : '/admin'
    })
})

router.post("/admin",(req, res, next) => {
    res.render("add-staff", {
        path : '/admin/add-staff'
    })
    res.redirect("/admin/add-staff")
})


module.exports = router;
//exports.routes = router;
//exports.addstaff = addstaff;