const Patient = require("../../../models/patients");
const Report = require("../../../models/reports");
const jwt = require('../../../config/authenticate_doctor')
const Doctor = require('../../../models/doctors');
const { status } = require("./report_controller");

//Register a patient
module.exports.registerPatient = async (req, res) => {

try {

    // check if patient with same phone exists or not
    let checkpatient = await Patient.find({ phone: req.body.phone });

    // if exists then .find({}) returns array of elements
    if (checkpatient && checkpatient.length > 0) {
        return res.status(200).json({
            success: true,
            body: checkpatient,
            message: 'All reports of patient!'
        });

    } else {

        // if not exists then registering new patient  
        checkpatient = new Patient({
            name: req.body.name,
            phone: req.body.phone
        });

        let addPatient = await checkpatient.save(); // saving registered patient in DB

        let pat = jwt.sign(addPatient, id);
        return res.status(200).json({
            success:true,
            body: addPatient,
            message: 'Patient registerd successfuly!'
        });
    }
} catch (error) {
    return res.status(500).json({
        success:false,
        message: 'Internal server error!'
    })
 }
};

//create patient report
module.exports.createReport = async (req, res) => {

try {

    // bvefore creating report firstly find all reports of patient 
    let report = await Report.find(req.body);

    // since .find({}) returns array
    if (report && report.length > 0) {
        return res.status(200).json({
            success: true,
            body: report,
            message: 'report already exist!'
        });
    } else {

        // if no reports present creating report
        report = new Report({
            createdBy: req.body.createdBy,
            patientId: req.params.id,
            status: req.body.status
        });
        let reportCreated = await report.save();// saving report in DB
        
        return res.status(200).json({
            success: true,
            body: reportCreated,
            message: 'Report created Successfuly!'
        });
    }
} catch (error) {
    console.log(error)
    return res.status(200).json({
        success: false,
        message: 'Internal server error!'
    });
  }
};
