var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var bcrypt = require('bcryptjs')
const SALT_FACTOR = 10;

var schema = new Schema({
  email: { type: String, required: true, unique: true, dropDups: true, lowercase: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

schema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    } else {
      bcrypt.hash(user.password, salt, function (err, hash) {
        user.password = hash;
        next();
      });
    }
  });
});

schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, isMatch) {
      if (err || !isMatch) {
        return reject({ error: 'bad request', message: 'invalid password' });
      } else {
        return resolve(isMatch);
      }
    });
  })
};

module.exports = mongoose.model('User', schema);