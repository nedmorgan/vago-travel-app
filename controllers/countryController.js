const User = require('../models/User')
const Country = require('../models/Country')

const countryController = {
  index: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        res.json(user.countries)
      })
      .catch((err) => {
        console.log("Woops, error getting countries: ", err)
      })
  },
  show: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        const specificCountry = user.countries.filter(country => country._id.toString() === req.params.countryId)
        res.json(specificCountry)
      }).catch((err) => {
        console.log("Couldn't find that country: ", err)
      })
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
    User.findById(req.params.userId)
      .then(user => {
        const specificCountries = user.countries.filter(country => country._id.toString() !== req.params.countryId)
        user.countries = specificCountries
        user.save().then(user => {
          res.json(user.countries)
        })
      })
  },
}

module.exports = countryController