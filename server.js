require('dotenv').config();

const express = require('express');
const workoutRoutes = require(('./routes/workouts'));

// express app creation
const app = express();


// middleware app
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

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});

