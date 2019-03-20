const User = require('../models/User')
const Country = require('../models/Country')

const userController = {
  index: (req, res) => {
    res.send('This is the dashboard page for the user and will show the username and countries associated')
  },
  create: (req, res) => {
    res.send('This will add a new country to the database')
  },
  updateUser: (req, res) => {
    res.send('Action to update a user in the database')
  },
  updateCountry: (req, res) => {
    res.send('This will update the name of a country in the database')
  },
  deleteUser: (req, res) => {
    res.send('Action to delete a user from the database')
  },
  deleteCountry: (req, res) => {
    res.send('This will delete a country from the database')
  },
}

module.exports = userController