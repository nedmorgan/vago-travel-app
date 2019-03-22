const User = require('../models/User')

const userController = {
  index: (req, res) => {
    User.find().then((user) => {
      res.json(user)
    }).catch((err) => {
      console.log("Ewwww, that's not right: ", err)
    })
  },
  create: (req, res) => {
    const newUser = new User(req.body.user)
    newUser
      .save()
      .then((user) => {
        res.json(user)
      }).catch((err) => {
        console.log('Something wrong posting: ', err)
      })
  },
  show: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        res.json(user)
      }).catch((err) => {
        console.log("Can't find that user bro: ", err)
      })
  },
  update: (req, res) => {
    const user = req.params.userId
    const updatedUser = req.body.user
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