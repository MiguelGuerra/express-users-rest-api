const express = require('express');
const router = express.Router();

const AuthController = require('../../controllers/AuthController');

//post user data to register user
router.post('/register', AuthController.register);

//post user data to login user
router.post('/login', AuthController.login);

module.exports = router;