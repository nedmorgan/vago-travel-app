const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const countryController = require('../controllers/countryController')

// User Controller

// Show the main dashboard page
router.get('/users', userController.index)

// Action to create a new user in the database
router.post('/users', userController.create)

// Show the user page
router.get('/users/:userId', userController.show)

// Update a user in the database
router.put('/users/:userId', userController.update)

// Delete a user from the database
router.delete('/users/:userId', userController.delete)

// Country Controller

// This will get all of the countries for that user
router.get('/users/:userId/countries', countryController.index)

// Page that will list an individual country
router.get('/users/:userId/countries/:countryId', countryController.show)

// This will post a new country to the my countries field
router.post('/users/:userId/countries', countryController.create)

// This will add a country into my favorites field
router.post('/users/:userId/countries/:countryId', countryController.favorite)

// Delete a country from the database
router.delete('/users/:userId/countries/:countryId', countryController.delete)

module.exports = router