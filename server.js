const express = require ('express')

// express app
const app = express()

// route
app.get('/', (req, res) => {
    res.json({msg: "Hello World"})
})

// listen for a port number request
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT) 
})