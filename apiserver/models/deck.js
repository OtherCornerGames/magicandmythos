var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	cards: [{type: ObjectId, ref: models.card.name, required: true}],
	extra: { type: Object, default: {}, required: true },	
	created: { type: Number, default: Date.now() },
	creatorId: { type: ObjectId, ref: models.user.name, required: true }
});



module.exports = mongoose.model(models.deck.name, schema);