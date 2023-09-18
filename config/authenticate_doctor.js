const Doctor = require("../models/doctors")
const jwt = require('jsonwebtoken');










module.exports.checkAuthentication = (req, res, next) => {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
        return res.status(401).json({
            success: false,
            message: 'Authorization header missing!'
        });
    }

    const token = tokenHeader.split(' ')[1]; // Split the token
    const decoded = jwt.verify(token, 'secret'); // Decode and verify the token

    if (!decoded) {
        return res.status(401).json({
            success: false,
            message: 'Token has expired or is invalid. Please regenerate it!'
        });
    }
    next();
};
