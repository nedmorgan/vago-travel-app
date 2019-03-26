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
    User.findById(req.params.userId)
      .then(user => {
        let specificCountry = user.countries.filter(country => country._id.toString() == req.params.countryId)
        const note = specificCountry[0].note.filter(note => note._id.toString() !== req.params.noteId)

      })
  },
}

module.exports = noteController