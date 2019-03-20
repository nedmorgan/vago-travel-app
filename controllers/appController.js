const User = require('../models/User')

const appController = {
  index: (req, res) => {
    res.send('This is the homepage page for Vago')
  },
  create: (req, res) => {
    res.send('Action to post a new user to the database')
  },
}

module.exports = appController