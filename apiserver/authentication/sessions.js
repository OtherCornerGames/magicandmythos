let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);
var env = require('../config/env')

console.log(process.env.CONNECTIONSTRING)

let store = new MongoDBStore(
	{
		uri: process.env.CONNECTIONSTRING,
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});

module.exports = session({
	secret: '983V!$eM9oQuBatCH3c!#@b9Bklj$lyqRAdH!$JW&iAas86J#W',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})

