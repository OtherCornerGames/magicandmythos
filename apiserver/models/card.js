var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now(), required: true },
	owners: { type: Object, required: true, default: {} },
	creatorId: { type: ObjectId, ref: models.user.name, required: true },
	extra: { type: Object, default: {}, required: true },	
	rules: { type: Object, required: true, default: {} }
});



module.exports = mongoose.model(models.card.name, schema);