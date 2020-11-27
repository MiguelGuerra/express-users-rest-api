const AccountUser = require('../models/AccountUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
                message: 'User Added Successfully!'
            })
        })
        .catch(err => {
            res.json({
                message: 'An error occured!'
            })
        })
    })
}

module.exports = {
    register
}