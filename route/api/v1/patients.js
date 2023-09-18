const express = require('express');
const router = express.Router();

// accessing authentication by jwt from config
const { checkAuthentication } = require('../../../config/authenticate_doctor')

const patientController = require('../../../controllers/api/v1/patient_controller')

// routes for call  controllers of patient resistration
router.post("/register", checkAuthentication, patientController.registerPatient);

// Can access this route only if doctor is logged in
router.post("/:id/create_report", checkAuthentication, patientController.createReport);

module.exports = router;