// Import necessary modules
const express = require('express'); 
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose'); // MongoDB ORM
const bodyParser = require('body-parser'); // Middleware for parsing request bodies

// Define the port for the server to listen on
const port = process.env.PORT || 3000;

// Create an Express app
app = express();

// Use body-parser middleware for decoding URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect the main routes (http://localhost:3000) with different routes defined in 'routers'
app.use('/', require('./routers'));

// Method for starting the server
module.exports.startServer = async () => {
    try {
        // Establish a connection with the MongoDB database
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully :: DB');

        // Start the server after successfully connecting to the database
        app.listen(port, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log(`${process.env.environment} server starts at port ${port}`);
        });
        
    } catch (error) {
        console.log('error', error);
    }
}
