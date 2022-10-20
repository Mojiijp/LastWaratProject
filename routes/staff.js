const express = require('express');

const router = express.Router();

router.get('/staff', (req, res, next) => {
    res.render("staff", {
        path : '/staff'
    })
})

module.exports = router;