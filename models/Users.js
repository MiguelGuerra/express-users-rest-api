const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
    avatarUrl: {
        type: String,
        required: false
    }
})

//name of collection and schema
module.exports = mongoose.model('User', UserSchema);