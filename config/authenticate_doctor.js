const Doctor = require("../models/doctors")
const jwt = require('jsonwebtoken');

// method for setting up authentication of doctors
module.exports.checkAuthentication =  (req, res, next) => {

    const data = req.headers.authorization; // receives data from header
    const token= data.split(' ')[1]; // spliting token
    const decoded = jwt.verify(token , 'secret');// decoding token and varifying
     
    if(!decoded) {
        return res.status(401).json({ 
            success:false,
            message: 'TOken expires! please regenerate it!'
        });
    }
    next();
};
