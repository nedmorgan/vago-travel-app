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

app.get('/country-data/:name', (req, res) => {
  const countries = require(`${__dirname}/countryData.json`).countries
  if (countries[req.params.name]) {
    res.send(countries[req.params.name])
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