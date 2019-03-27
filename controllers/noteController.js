const Note = require('../models/Note')
const User = require('../models/User')
const Country = require('../models/Country')

const noteController = {
  create: (req, res) => {
    const newNote = new Note(req.body)
    User.findById(req.params.userId)
      .then(user => {
        let specificCountry = user.countries.filter(country => country._id.toString() == req.params.countryId)
        specificCountry[0].note.push(newNote)
        user.save().then(user => {
          res.json(newNote)
        }).catch((err) => {
          console.log("Didn't like that note: ", err)
        })
      })
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