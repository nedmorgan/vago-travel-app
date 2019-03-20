const mongoose = require('./connection')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  password: String,
  countries: [CountrySchema],
  favorites: [CountrySchema],
})

const CountrySchema = new Schema({
  name: String
})

module.exports = {
  UserSchema: UserSchema,
  CountrySchema: CountrySchema
}