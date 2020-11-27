const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountUserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
}, { timestamps: true }) 

const AccountUser = mongoose.model('AccountUser', accountUserSchema);

module.exports = AccountUser;