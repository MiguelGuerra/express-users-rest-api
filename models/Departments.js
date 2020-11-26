const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberOfEmployees: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: false
    },
    tecnologiesOptions: {
        type: Array,
        required: true
    },
    teams: {
        topLevel: {
            type: String,
            required: false
        },
        lowLevel: {
            type: String,
            required: false
        }
    }
})

//name of collection and schema
module.exports = mongoose.model('Department', DepartmentSchema);