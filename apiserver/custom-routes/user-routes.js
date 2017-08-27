
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/', function (req, res, next) {
  User.create(req.body)
    .then((user) => {
      res.send({ message: `${user} created successfully` })
    })
    .catch(next)
})

router.put('/:userId', function (req, res, next) {
  var userId = req.params.userId;
  var updatedUserObject = req.body;

  User.findByIdAndUpdate(userId, updatedUserObject)
    .then(user => {
      res.send(req.body);
    })
    .catch(next);
})

router.use(defaultErrorHandler);

function defaultErrorHandler(err, req, res, next) {

  if (req.xhr) {
    res.json({ success: false, error: err });
  }
  else {
    res.json({ success: false, error: err.message });
  }
}

module.exports = router;