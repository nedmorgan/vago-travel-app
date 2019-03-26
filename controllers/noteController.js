const Note = require('../models/Note')
const User = require('../models/User')
const Country = require('../models/Country')

const noteController = {
  create: (req, res) => {
    res.send('Create a new note in database')
  },
  update: (req, res) => {
    res.send('Update a note in the database')
  },
  delete: (req, res) => {
    res.send('Delete a note in the database')
  },
}

module.exports = noteController