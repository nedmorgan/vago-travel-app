const express = require('express')
const router = express.Router()

const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const countryController = require('../controllers/countryController')

// App Controller

// This will show the homepage of the application
router.get('/', appController.index)

// Action to create a new user in the database
router.post('/', appController.create)

// User Controller


// Country Controller

// Page that will list an individual country
router.get('/:userId/countries/:countryId', countryController.index)

module.exports = router