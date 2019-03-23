const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index')

app.use(logger('dev'))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use('/api/v1', routes)

app.use(express.static(`${__dirname}/client/build`))

app.get('/country-data/countries', (req, res) => {
  res.send(Object.keys(require(`${__dirname}/countryData.json`).countries))
})

app.get('/country-data/country/:name', (req, res) => {
  const countries = require(`${__dirname}/countryData.json`).countries
  const regex = /\s/g
  const formattedName = req.params.name.toLowerCase().replace(regex, '_')
  if (countries[formattedName]) {
    res.send(countries[formattedName])
  } else {
    res.send('That country does not exist yet!')
  }
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Houston, we have liftoff on port ${PORT}`)
})