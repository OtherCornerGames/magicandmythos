var router = require('express').Router()
var Users = require('../models/user')

router.post('/register', (req, res) => {
  Users.create(req.body)
    .then((user) => {
      req.session.uid = user._id
      req.session.save()
      user.password = null
      res.send({
        message: 'Successfully created account',
        data: user
      })
    }).catch((err) => {
      res.send({ error: err })
    })
})

router.post('/login', (req, res) => {
  Users.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.send({ error: 'Email or password incorrect' })
      }
      req.session.uid = user._id
      req.session.save()
      user.password = null
      res.send({
        message: 'Logged in',
        data: user
      })
    }).catch(err =>{
      res.send({error: err})
    })
})

router.delete('/logout', (req, res)=>{
  req.session.destroy()
  res.send({
    message: 'Logged out'
  })
})

module.exports = router