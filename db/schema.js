const mongoose = require('./connection')
const Schema = mongoose.Schema

const CountrySchema = new Schema({
  name: String
})

const UserSchema = new Schema({
  name: String,
  password: String,
  countries: [CountrySchema],
  favorites: [CountrySchema],
})

module.exports = {
  UserSchema: UserSchema,
  CountrySchema: CountrySchema
}