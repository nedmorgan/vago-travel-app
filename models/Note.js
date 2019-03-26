const {
  NoteSchema
} = require('../db/schema')

const mongoose = require('../db/connection')

module.exports = mongoose.model('Note', NoteSchema)