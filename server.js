require('dotenv').config();

const express = require('express');

// express app creation
const app = express();

// port number and hiding it in the enc file
// const PORT = process.env.PORT || 5000;

// Routes:  handling requests
app.get('/', (req, res) => {
  res.json({mssg: 'Hello World!'});
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});

