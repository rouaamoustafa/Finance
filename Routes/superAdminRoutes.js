const express = require('express');
const { getSuperAdmins } = require('../Controller/superAdminController');  // Import controller

const router = express.Router();

// Define the route for SuperAdmins
router.get('/', getSuperAdmins);

module.exports = router;
