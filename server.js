const express = require('express')
const logger = require('morgan')
const fs = require('fs')

app.use(logger('dev'))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use('/api/v1', routes)

app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.get('/country-data/:name', (req, res) => {

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Houston, we have liftoff on port ${PORT}`)
})