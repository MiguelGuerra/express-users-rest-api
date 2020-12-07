const AccountUser = require('../models/AccountUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//to register a new user
const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
        let accountUser = new AccountUser({
            email: req.body.email,
            password: hashedPass,
            role: req.body.role
        })
        accountUser.save()
        .then(user => {
            res.json({
                message: 'User Added Successfully!',
                success: true
            })
        })
        .catch(err => {
            res.json({
                message: 'An error occured!',
                success: false
            })
        })
    })
}

//for the login user
const login = (req, res, next) => {
    let userEmail = req.body.email;
    let password = req.body.password;

    AccountUser.findOne({
        //find by email on collection
        $or: [{email: userEmail}]
    })
    .then(user => {
        if(user) {
            //if it finds a user with the email
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successfully!',
                        token: token,
                        success: true,
                        role: user.role
                    })
                } else {
                    res.json({
                        message: 'Password does not match!',
                        success: false,
                    })
                }
            })
        } else {
            res.json({
                message: 'No user found!'
            })
        }
    })
}


//for the login user
const logout = (req, res, next) => {
    
}

module.exports = {
    register,
    login,
    logout
}