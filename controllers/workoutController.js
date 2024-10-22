const { error } = require('console')
const WorkoutM = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all woutouts
const getWorkoutDocs = async(req, res) =>{
    const workoutDocs = await WorkoutM.find({}).sort({createdDAt: -1})
    res.status(200).json(workoutDocs)
}


// get a single workout
const getWorkoutDoc = async (req, res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such file in the databse'})
    }

    const workout =  await WorkoutM.findById(id)
    if(!workout){
        return res.status(404).json({error: 'No such workout in database!'})
    }
    res.status(200).json(workout)

}
// creat a new workout
const createWorkoutDoc = async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await WorkoutM.create({title, load, reps})
        res.status(200).json(workout)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such file in the databse'})
    }

    const workout = await WorkoutM.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error: 'No such workout in database!'})
    }
    res.status(200).json(workout)

}

// update a workout
const updateWorkout = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such file in the databse'})
    }

    const workout = await WorkoutM.findOneAndUpdate({_id: id}, {
        ...req.body

    })

    if(!workout){
        return res.status(404).json({error: 'No such workout in database!'})
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkoutDocs,
    getWorkoutDoc,
    createWorkoutDoc,
    deleteWorkout,
    updateWorkout
}