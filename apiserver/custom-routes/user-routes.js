let Decks = require('../models/deck')
let Cards = require('../models/card')

export default {
  getCardsByDeckId: {
    path: '/decks/:deckId/cards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return deck and associated cards'
      Decks.findById(req.params.deckId)
        .then(deck => {
          Cards.find({ decks: { $in: [req.params.deckId] } })
            .then(cards => {
              deck.cards = cards
              res.send(handleResponse(action, deck.cards))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  addCardToDeck: {
    path: '/addtodeck/:deckId/cards/:cardId',
    reqType: 'put',
    method(req, res, next) {
      let action = 'add a card to a deck'
      Cards.findById(req.params.cardId)
        .then(card => {
          card.decks.push(req.body.deckId)
          keep.keepCount++
        })
        .catch(handleResponse)
    }
  },
  getVaultsByUserId: {
    path: '/uservaults',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated keeps'
      Vaults.find({ creatorId: req.session.uid })
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getKeepsByUserId: {
    path: '/userkeeps',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated keeps'
      Keeps.find({ userId: req.session.uid })
        .then(keeps => {
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getKeepsByTag: {
    path: '/keeps/:tag',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return user associated keeps'
      Keeps.find({ tags: req.params.tag })
        .then(keeps => {
          var publicKeeps = []
          for (var i = 0; i < keeps.length; i++) {
            var keep = keeps[i]
            if (keep.private == false) {
              publicKeeps.push(keep)
            }
          }
          res.send(handleResponse(action, publicKeeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getKeeps: {
    path: '/keeps',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find keeps'
      Keeps.find()
        .then(keeps => {
          var publicKeeps = []
          for (var i = 0; i < keeps.length; i++) {
            var keep = keeps[i]
            if (keep.private == false) {
              publicKeeps.push(keep)
            }
          }
          res.send(handleResponse(action, publicKeeps))
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