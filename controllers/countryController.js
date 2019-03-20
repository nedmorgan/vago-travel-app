const User = require('../models/User')
const Country = require('../models/Country')

const countryController = {
  index: (req, res) => {
    res.send('This page shows the individual country')
  },
  create: (req, res) => {
    res.send('This will add a new country to the database')
  },
  favorite: (req, res) => {
    res.send('This will add a new country to my favorites field')
  },
  update: (req, res) => {
    res.send('This will update the name of a country in the database')
  },
  delete: (req, res) => {
    res.send('This will delete a country from the database')
  },
}

module.exports = countryController