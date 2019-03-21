const User = require('../models/User')
const Country = require('../models/Country')

const userController = {
  index: (req, res) => {
    User.find().then((user) => {
      res.json(user)
    }).catch((err) => {
      console.log(err)
    })
  },
  create: (req, res) => {
    const newUser = new User(req.body)
    newUser
      .save()
      .then((user) => {
        res.json(user)
      }).catch((err) => {
        console.log('Something wrong posting: ', err)
      })
  },
  update: (req, res) => {
    const user = req.params.userId
    const updatedUser = req.body
    User.findByIdAndUpdate(user, updatedUser, {
      new: true
    }).then(user => {
      res.json(user)
    }).catch((err) => {
      console.log('Error updating user: ', err)
    })
  },
  delete: (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
      res.json(user)
    }).catch((err) => {
      console.log('Error deleting: ', err)
    })
  }
}

module.exports = userController