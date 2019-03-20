const {
  CountrySchema
} = require('../db/schema')

const mongoose = require('../db/connection')

module.exports = mongoose.model('Country', CountrySchema)