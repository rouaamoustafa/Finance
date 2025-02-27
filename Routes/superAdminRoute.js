const express = require('express');
const { getSuperAdmins } = require('../controllers/superAdminController');

const router = express.Router();

// Define the route for SuperAdmins
router.get('/', getSuperAdmins);

module.exports = router;
