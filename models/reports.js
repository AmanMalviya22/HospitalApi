const mongoose = require("mongoose");

// Schema for report
const ReportSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        require: true
    },

    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Patient`
    },
    status: {
        type: String,
        enum: ['Negative', 'Positive-Admit', 'Symptoms-Quratine', 'Travelled-Qurantine'],
        require: true

    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });

module.exports = mongoose.model("Report", ReportSchema);