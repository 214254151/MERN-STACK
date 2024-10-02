// importing PORT number from env file
require('dotenv').config();

const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require(('./routes/workouts'));

// express app creation
const app = express();


// middleware apps
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Routes:  handling requests for testing
// `app.get('/', (req, res) => {
//   res.json({mssg: 'Hello World!'});
// });`


// Routes
app.use('/api/workouts', workoutRoutes);

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
  app.listen(process.env.PORT, () => {
    console.log('Connected to DB and listening on port: ', process.env.PORT)
  })
})
.catch((error) =>{
  console.log(error);
})



