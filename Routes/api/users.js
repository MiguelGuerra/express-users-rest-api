const express = require('express');
const router = express.Router();

//user model
const Users = require('../../models/Users');

//routes for GET all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        if(!users) {
            throw Error('No users found');
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for GET a user
router.get('/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id);
        if(!users) {
            throw Error('No users found');
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for POST api/posts
router.post('/', async (req, res) => {
    const newUser = new Users(req.body);
    try {
        const user = await newUser.save();
        if(!user){
            throw Error('Something went wrong while saving the user');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

//routes for DELETE user
router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) {
            throw Error('No user found');
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
})

//routes for UPDATE user
router.patch('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if(!user) {
            throw Error('Something went wrong while updating the user');
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
})
module.exports = router;