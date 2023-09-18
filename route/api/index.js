const express = require('express');
const router = express.Router();

// set-up routes localhost:3000/api/v1
router.use('/v1', require('./v1/index'));

module.exports = router;