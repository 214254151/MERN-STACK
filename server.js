require('dotenv').config()

const express = require ('express')

// express app
const app = express()

// middleware another to log the request that are comming in
app.use((req,res, next) => {
    console.log(req.path, req.method) 
    next()   
    })
// middleware
// route
app.get('/', (req, res) => {
    res.json({msg: "Hello World"})
})


// listen for a port number request.
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT) 
})