const express = require('express');

const WorkoutM = require('../models/workoutModel')

const router = express.Router();

// TEstiing for getting all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GEt all the workouts'})
})

// GEt a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})


// POST a request
router.post('/', async(req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await WorkoutM.create({title, load, reps})
        res.status(200).json(workout)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }
})

// Delete a request
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a request/workout'})
})

// UPDATE a request
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE request/workout'})
})


module.exports = router;