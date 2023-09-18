const Doctor = require('../../../models/doctors');
const jwt = require('jsonwebtoken')

// controller for sign-up doctors
module.exports.createDoctor = async (req, res) => {

    try {

        let doctor = await Doctor.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        return res.status(200).json({
            success: true,
            body: doctor,
            message: 'Doctor Sing-Up Successfuly !'
        })
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error!'
        })
    }
}

module.exports.signIn = async (req, res) => {
    try {

        // using destructure for accessing more than one data simultaniouslly
        let {email, password} = req.body;

// if user forgot to fill either email or password
        if(!email || !password) {

            return res.status(400).json({
                success: false,
                message: 'Fill correct Password/Username !'
            })
        }

        // check for if user present in databas or not
        const doctor =await Doctor.findOne({email: email});

        // check for if doctor not exists in database
        if(!doctor) {
            return res.status(401).json({
                success: false,
                message: 'Doctor not found !'
            })
        }

       
    //  check for  if password match or not
    if(doctor.password != password) {
        return res.status(401).json({
            success:false,
            message: 'Invalid Username?Password!'
        })
    }

    // jwt authentication and creation of token
    let token = jwt.sign(doctor.toJSON(), 'secret', { expiresIn: '24h' });


    return res.status(200).json({
        success: true,
        body: token,
        message: 'Singed-In Successfuly! please keep this token safe!'
    })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error!"
        })
    }
}