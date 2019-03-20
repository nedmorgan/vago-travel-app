const User = require('../models/User')
const Country = require('../models/Country')

const countryController = {
  index: (req, res) => {
    res.send('This page shows the individual country')
  }
}

module.exports = countryController