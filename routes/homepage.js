const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("homepage", {
        path : '/'
    })
})

module.exports = router;