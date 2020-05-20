const express = require('express');
const router = express.Router();
router.get('/demo1', (req, res) => {
    res.send(`hello demo1`)
})
router.get('/demo2', (req, res) => {
    res.send(`hello demo2`)
})
module.exports = router;