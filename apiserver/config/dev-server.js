import env from './env'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { defaultErrorHandler, corsOptions } from './handlers'
import api from '../models'
import session from '../authentication/sessions'
import Auth from '../authentication/auth'

// ENABLE ROUTES IF USING app SIDE ROUTING
// import routes from './routes'

let app = express()
let server = require('http').createServer(app)

function Validate(req, res, next) {
    console.log(req.session)
    if (!req.session.uid) {
        return res.send({ error: 'Please Login or Register to continue' })
    }
    return next()
}

function logger(req, res, next) {
	console.log('INCOMING REQUEST', req.url)
	next()
}

app.use(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../../www/dist'))
app.use('*', logger)
app.use('*', cors(corsOptions))
app.use('/', Auth)

// this forces any api request to require authentication
app.use(Validate)
app.use('/api', api)
app.use('/', defaultErrorHandler)


export default server