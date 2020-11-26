const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PieChartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, { collection : 'pieChart' })

//name of collection and schema
module.exports = mongoose.model('PieChart', PieChartSchema);