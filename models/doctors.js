const mongoose = require('mongoose');
const doctor = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require: true,
    }
}, { timestamps: true });

const Doctor = new mongoose.model('Doctor', doctor);
module.exports = Doctor;