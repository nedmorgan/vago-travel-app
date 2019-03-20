const User = require('../models/User')
const Country = require('../models/Country')

const userController = {
  index: (req, res) => {
    res.send('This is the dashboard page for the user and will show the username and countries associated')
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