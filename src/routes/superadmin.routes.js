const express = require('express');
const router = express.Router();
const { createSuperAdmin , getSuperAdminById , getAllSuperAdmins} = require("../controller/superAdmin.js/AdminController");
const { superadmins } = require('../model');
const verifyMiddleware = require('../middleware/verifyUniqueMiddlware');

// Define routes
const check =  verifyMiddleware(superadmins)
router.get('/superAdmins', getAllSuperAdmins);
router.get('/superAdmins/:id', getSuperAdminById);
router.post('/superAdmins', check , createSuperAdmin); // New route for creating a SuperAdmin

module.exports = router;
