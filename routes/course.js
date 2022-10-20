const express = require('express');

const router = express.Router();

router.get('/course', (req, res, next) => {
    res.render("course", {
        path : '/course'
    })
})

module.exports = router;