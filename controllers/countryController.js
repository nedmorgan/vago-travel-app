const User = require('../models/User')
const Country = require('../models/Country')

const countryController = {
  index: (req, res) => {
    res.send('This page shows the individual country')
  },
  favorite: (req, res) => {
    res.send('This will add a new country to my favorites field')
  }
}

module.exports = countryController