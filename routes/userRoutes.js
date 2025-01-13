const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers).post('/', userController.createAllUsers);

module.exports = router;
