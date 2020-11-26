const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LineChartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, { collection : 'lineChart' })

//name of collection and schema
module.exports = mongoose.model('LineChart', LineChartSchema);