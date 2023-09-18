const express = require('express');
const router = express.Router();

// setting connection of routes from localhost:300/api/v1/doctors
router.use('/doctors', require('./doctors'));

// setting connection of routes from localhost:300/api/v1/patients
router.use('/patients', require('./patients'))

// setting connection of routes from localhost:300/api/v1/reports
router.use('/reports', require('./reoprts'))

module.exports = router;