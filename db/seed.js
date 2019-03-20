require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Country = require('../models/Country')

const italy = new Country({
  name: 'Italy'
})

const malaysia = new Country({
  name: 'Malaysia'
})

const vietnam = new Country({
  name: 'Vietnam'
})

const mexico = new Country({
  name: 'Mexico'
})

const walter = new User({
  name: 'Walter',
  password: 'ilikebones',
  countries: [italy, malaysia, vietnam, mexico],
  favorites: [malaysia, mexico]
})

User.deleteMany({})
  .then(() => walter.save())
  .then(() => console.log('Things have been saved to MongoDB'))
  .then(() => mongoose.connection.close())