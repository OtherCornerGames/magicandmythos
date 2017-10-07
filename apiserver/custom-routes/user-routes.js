let Decks = require('../models/deck')
let Cards = require('../models/card')
let Dungeons = require('../models/dungeon')

module.exports = {
  //GETS
  getDecksByUserId: {
    path: '/userdecks',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated decks'
      Decks.find({ creatorId: req.session.uid })
        .then(decks => {
          res.send(handleResponse(action, decks))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getCardsByUserId: {
    path: '/usercards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated cards'
      Cards.find({ userId: req.session.uid })
        .then(cards => {
          res.send(handleResponse(action, cards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getDungeonsByUserId: {
    path: '/userdungeons',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated dungeons'
      Dungeons.find({ userId: req.session.uid })
        .then(dungeons => {
          res.send(handleResponse(action, dungeons))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}

function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}