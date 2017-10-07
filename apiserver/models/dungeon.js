var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  map: { type: String },
  rooms: { type: Object, required: true, default: {} },
  cards: [{ type: ObjectId, ref: models.card.name, required: true }],
  created: { type: Number, default: Date.now() },
  private: { type: Boolean, default: true, required: true },
  extra: { type: Object, default: {}, required: true },
  creatorId: { type: ObjectId, ref: models.user.name, required: true }
});



module.exports = mongoose.model(models.dungeon.name, schema);