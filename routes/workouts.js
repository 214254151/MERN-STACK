// const express = require('express');

const express = require('express');
const { createWorkoutDoc, getWorkoutDoc, getWorkoutDocs, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();

// // TEstiing for getting all workouts
// router.get('/', (req, res) => {
//     res.json({mssg: 'GEt all the workouts'})
// })

// // GEt a single workout
// router.get('/:id', (req, res) => {
//     res.json({mssg: 'GET a single workout'})
// })

// // POST a request
// router.post('/', (req, res) => {
//     res.json({mssg: 'POST  new request/workout'})
// })

// TEstiing for getting all workouts
router.get('/',getWorkoutDocs) 

// GEt a single workout
router.get('/:id', getWorkoutDoc)

// POST a request
router.post('/',createWorkoutDoc)  
    
// // Delete a request
// router.delete('/:id', (req, res) => {
//     res.json({mssg: 'DELETE a request/workout'})
// })

// // UPDATE a request
// router.patch('/:id', (req, res) => {
//     res.json({mssg: 'UPDATE request/workout'})
// })




// Delete a request
router.delete('/:id', deleteWorkout)

// UPDATE a request
router.patch('/:id', updateWorkout)


module.exports = router;


