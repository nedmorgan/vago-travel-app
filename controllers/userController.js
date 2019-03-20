const express = require('express')
const User = require('../models/User')
const Country = require('../models/Country')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the index page for ')
})