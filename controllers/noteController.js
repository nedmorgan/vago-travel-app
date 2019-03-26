const Note = require('../models/Note')

const noteController = {
  index: (req, res) => {
    res.send('Show all the notes')
  },
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