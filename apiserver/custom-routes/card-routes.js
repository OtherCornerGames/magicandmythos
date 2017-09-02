let Cards = require('../models/cards')


export default {
  getCards: {
    path: '/cards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find cards that are public'
      Cards.find()
        .then(cards => {
          var publicCards = []
          for (var i = 0; i < cards.length; i++) {
            var card = cards[i]
            if (card.private == false) {
              publicCards.push(card)
            }
          }
          res.send(handleResponse(action, publicCards))
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