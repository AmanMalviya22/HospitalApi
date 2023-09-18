const mongoose = require("mongoose");

// Schema for patient
const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
});

module.exports = mongoose.model("Patient", PatientSchema);