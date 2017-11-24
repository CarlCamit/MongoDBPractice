const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// Allow POST/PUT/PATCH requests to pass along JSON, and it will be decoded for us at 'req.json'
server.use(bodyParser.json())

// Routes
server.use([
    require('./routes/artists'),
    require('./routes/artists')
])

server.listen(7000, () => {
    console.log("Server started at http://localhost:7000")
})