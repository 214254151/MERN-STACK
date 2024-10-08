const express = require('express');
const { createWorkoutDoc, getWorkoutDoc, getWorkoutDocs, deleteWorkout,
    updateWorkout } = require('../controllers/workoutController');



const router = express.Router();

// TEstiing for getting all workouts
router.get('/',getWorkoutDocs) 


// GEt a single workout
router.get('/:id', getWorkoutDoc)

// POST a request
router.post('/',createWorkoutDoc)  
    


// Delete a request
router.delete('/:id', deleteWorkout)

// UPDATE a request
router.patch('/:id', updateWorkout)


module.exports = router;