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
    res.send('Action to post a new user to the database')
  },
  update: (req, res) => {
    res.send('Action to update a user in the database')
  },
  delete: (req, res) => {
    res.send('Action to delete a user from the database')
  },
}

module.exports = userController