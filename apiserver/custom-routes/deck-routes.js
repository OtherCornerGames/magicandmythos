let Decks = require('../models/deck')
let Cards = require('../models/card')

export default {
  // GETS
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
  // PUTS
  addCardToDeck: {
    path: '/decks/:deckId/cards/:cardId',
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