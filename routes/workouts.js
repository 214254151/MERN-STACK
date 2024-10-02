const express = require('express');
const { createWorkoutDoc, getWorkoutDoc, getWorkoutDocs } = require('../controllers/workoutController');



const router = express.Router();

// TEstiing for getting all workouts
router.get('/',getWorkoutDocs) 


// GEt a single workout
router.get('/:id', getWorkoutDoc)

// POST a request
router.post('/',createWorkoutDoc)  
    


// Delete a request
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a request/workout'})
})

// UPDATE a request
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE request/workout'})
})


module.exports = router;