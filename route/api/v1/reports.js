const express = require('express');
const router = express.Router();
// accessing authentication by jwt from config
const auth = require('../../../config/authenticate_doctor');
const reportController = require('../../../controllers/api/v1/report_controller');

// getting all reports
router.get('/:id/all_report' ,auth.checkAuthentication, reportController.allReport);

// getting all reports by specific status
router.get('/:status' , reportController.status);
module.exports = router;