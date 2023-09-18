const express = require('express');
const router = express.Router();

const doctorController = require('../../../controllers/api/v1/doctors_controller');

// routes for call controller for sign-up the doctor
router.post('/register', doctorController.createDoctor);

// routes for call controller for sign-in the doctor
router.post('/login', doctorController.signIn);

module.exports = router;