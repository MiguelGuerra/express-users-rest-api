const express = require('express');
const router = express.Router();

//user model
const Departments = require('../../models/Departments');

//routes for GET all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Departments.find();
        if(!departments) {
            throw Error('No departments found');
        }
        res.status(200).json(departments);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for POST department
router.post('/', async (req, res) => {
    const newDepartment = new Departments(req.body);
    try {
        const department = await newDepartment.save();
        if(!department) {
            throw Error('No departments found');
        }
        res.status(200).json(department);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

module.exports = router;