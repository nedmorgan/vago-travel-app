const mongoose = require('./connection')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: String,
  description: String,
  created: {
    type: Date,
    default: new Date()
  },
})

const CountrySchema = new Schema({
  name: String,
  note: [NoteSchema]
})

const UserSchema = new Schema({
  name: String,
  password: String,
  countries: [CountrySchema],
  favorites: [CountrySchema],
})


module.exports = {
  UserSchema: UserSchema,
  CountrySchema: CountrySchema,
  NoteSchema: NoteSchema
}