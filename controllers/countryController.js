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
    User.findById(req.params.userId)
      .then(user => {
        const newCountry = new Country(req.body)
        user.countries.push(newCountry)
        user.save()
          .then(user => {
            res.json(newCountry)
          })
      }).catch((err) => {
        console.log("Danger Will Robinson: ", err)
      })
  },
  favorite: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        const countries = user.countries
        const country = countries.filter((country) => {
          return country._id == req.params.countryId
        })
        user.favorites.push(country[0])
        user.save()
          .then(user => {
            res.json(user)
          })
      }).catch((err) => {
        console.log("Somethangs wrong round these parts: ", err)
      })
  },
  delete: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        const specificCountries = user.countries.filter(country => country._id.toString() !== req.params.countryId)
        // const favoriteCountries = user.favorites.filter(country => country._id.toString() !== req.params.countryId)
        // user.favorites = favoriteCountries
        user.countries = specificCountries
        user.save().then(user => {
          res.json(user.countries)
        })
      }).catch((err) => {
        console.log("Somethings fishy: ", err)
      })
  },
}

module.exports = countryController