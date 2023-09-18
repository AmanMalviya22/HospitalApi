const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home)

// set-up routes localhost:3000/api
router.use('/api', require('./api/index'));

module.exports = router;

