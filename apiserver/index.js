var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
//connect mlab at some point when ready
// var dbConnect = require('.config/db/mlab-config')
var port = 3000

var server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

//todo setup routers for each api request type
