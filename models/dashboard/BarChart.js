const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarChartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, { collection : 'barChart' })

//name of collection and schema
module.exports = mongoose.model('BarChart', BarChartSchema);