const Report = require('../../../models/reports')

// finding all reports of a patient
module.exports.allReport = async function (req, res) {
    try {
        const patientId = req.params.id;
        const allReport = await Report.find({ patientId: patientId });
      
        return res.status(200).json({
            success: true,
            body: allReport,
            message: 'All reports of patient!'
        });
    } catch (error) {
       console.log(error);
        return res.status(200).json({
            success: false,
            message: 'Internal server error!'
        });
    }
}

//search by status || filter reports by status
module.exports.status = async function (req, res) {
    try {

        const status = req.params.status;

        // finding reports by status
        const result = await Report.find({ status: status });

        return res.json(200, {
            success:true,
            results: result,
            message: 'All reports of specific status!'
        });

    } catch (error) {
       console.log(error);
        return res.json(200, {
            success: false,
            message: 'Internal server error!'
        });
    }
}