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

// Show the users dashboard page
router.get('/:userId', userController.index)

// This will post a new country to the database
router.post('/:userId/countries', userController.create)

// Update a user in the database
router.put('/:userId', userController.updateUser)

// Update a country in the database
router.put('/:userId/countries/:countryId', userController.updateCountry)

// Delete a user from the database
router.delete('/:userId', userController.deleteUser)

// Delete a country from the database
router.delete('/:userId/countries/:countryId', userController.deleteCountry)

// Country Controller

// Page that will list an individual country
router.get('/:userId/countries/:countryId', countryController.index)

module.exports = router