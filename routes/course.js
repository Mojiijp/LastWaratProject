const express = require('express');

const router = express.Router();

router.get('/course', (req, res, next) => {
    res.render("course", {
        path : '/course'
    })
})

router.get("/course",(req, res, next) => {
    res.render("cscourse", {
        path : '/course'
    })
    res.redirect("/course/cscourse")
})

module.exports = router;