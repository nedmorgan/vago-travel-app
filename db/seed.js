require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Country = require('../models/Country')
const Note = require('../models/Note')

const hotel = new Note({
  title: 'Quirky Hotel',
  description: 'Found this great hotel in Rome. Look close to Trevi fountain!'
})

const beach = new Note({
  title: 'Great Beach',
  description: 'There is an amazing secluded beach close 30 minutes from airport in Phu Quoc.'
})

const diving = new Note({
  title: 'Great diving spot',
  description: 'Check out Buddy Dive in Sipadan for amazing diving!'
})

const italy = new Country({
  name: 'Italy',
  note: [hotel]
})

const malaysia = new Country({
  name: 'Malaysia',
  note: [diving]
})

const vietnam = new Country({
  name: 'Vietnam',
  note: [beach]
})

const mexico = new Country({
  name: 'Mexico',
  note: []
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