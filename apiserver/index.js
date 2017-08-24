var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var sessions = require('sessions')
var dbConnect = require('.config/db/mlab-config')
var port = 3000

var server = express()

server.use('/', cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

server.use(sessions)
server.use(express.static(__dirname + '/www'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

var authRouter = require("./routes/auth")
server.use('/', authRouter)

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

//todo setup routers for each api request type
