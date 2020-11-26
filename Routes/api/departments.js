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

//routes for GET a particular departments
router.get('/:id', async (req, res) => {
    try {
        const departments = await Departments.findById(req.params.id);
        if(!departments) {
            throw Error('No department found');
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

//routes for DELETE a particular department
router.delete('/:id', async (req, res) => {
    try {
        const departments = await Departments.findByIdAndDelete(req.params.id);
        if(!departments) {
            throw Error('No department found');
        }
        res.status(200).json(departments);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for UPDATE a particular department
router.patch('/:id', async (req, res) => {
    try {
        const departments = await Departments.findByIdAndUpdate(req.params.id, req.body);
        if(!departments) {
            throw Error('No department found');
        }
        res.status(200).json(departments);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})
module.exports = router;