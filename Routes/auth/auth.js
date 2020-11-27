const express = require('express');
const router = express.Router();

const AuthController = require('../../controllers/AuthController');

//post user data to register user
router.post('/', AuthController.register);

module.exports = router;