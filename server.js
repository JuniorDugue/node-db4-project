const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rRouter = require('./receipes/router')
const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(logger)
server.use('/receipes', rRouter)

server.get('/', (req, res) => {
    res.send('this is db4 assignment')
})

//middleware
function logger(req, res, next) {
    console.log(`${req.method} request`)
    next();
} 

module.exports = server;