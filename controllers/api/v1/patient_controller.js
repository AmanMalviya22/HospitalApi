const Patient = require("../../../models/patients");
const Report = require("../../../models/reports");
const jwt = require('jsonwebtoken');
const Doctor = require('../../../models/doctors');

// Register a patient
module.exports.registerPatient = async (req, res) => {
    try {
        // Check if a patient with the same phone number exists
        let existingPatient = await Patient.findOne({ phone: req.body.phone });

        if (existingPatient) {
            return res.status(409).json({
                success: false,
                message: 'Patient with the same phone number already exists.',
            });
        } else {
            // If the patient doesn't exist, register a new patient
            const newPatient = new Patient({
                name: req.body.name,
                phone: req.body.phone,
            });

            const savedPatient = await newPatient.save();

            // Generate a JWT token for the newly registered patient
            const token = jwt.sign({ patientId: savedPatient._id }, 'secret');

            return res.status(201).json({
                success: true,
                token: token,
                message: 'Patient registered successfully!',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error!',
        });
    }
};

// Create a patient report
module.exports.createReport = async (req, res) => {
    try {
        // Check if a report for the patient already exists
        const existingReport = await Report.findOne({
            patientId: req.params.id,
            createdBy: req.body.createdBy,
        });

        if (existingReport) {
            return res.status(409).json({
                success: false,
                message: 'Report already exists for this patient.',
            });
        } else {
            // If the report doesn't exist, create a new report
            const newReport = new Report({
                createdBy: req.body.createdBy,
                patientId: req.params.id,
                status: req.body.status,
            });

            const savedReport = await newReport.save();

            return res.status(201).json({
                success: true,
                body: savedReport,
                message: 'Report created successfully!',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error!',
        });
    }
};
