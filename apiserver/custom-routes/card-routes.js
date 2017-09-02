let Cards = require('../models/cards')


export default {
  getCards: {
    path: '/cards',
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