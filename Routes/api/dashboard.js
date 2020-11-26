const express = require('express');
const router = express.Router();

//models
const LineChart = require('../../models/dashboard/LineChart');
const BarChart = require('../../models/dashboard/BarChart');
const PieChart = require('../../models/dashboard/PieChart');

//routes for GET line chart data
router.get('/lineChartData', async (req, res) => {
    try {
        const data = await LineChart.find();
        if(!data) {
            throw Error('No data found');
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for GET pie chart data
router.get('/pieChartData', async (req, res) => {
    try {
        const data = await PieChart.find();
        if(!data) {
            throw Error('No data found');
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for GET bar chart data
router.get('/barChartData', async (req, res) => {
    try {
        const data = await BarChart.find();
        if(!data) {
            throw Error('No data found');
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

module.exports = router;