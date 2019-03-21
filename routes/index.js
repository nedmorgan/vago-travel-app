const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const countryController = require('../controllers/countryController')

// User Controller

// Show the users dashboard page
router.get('/:userId', userController.index)

// Action to create a new user in the database
router.post('/', userController.create)

// Update a user in the database
router.put('/:userId', userController.update)

// Delete a user from the database
router.delete('/:userId', userController.delete)

// Country Controller

// This will get all of the countries for that user
router.get('/:userId/countries', countryController.index)

// Page that will list an individual country
router.get('/:userId/countries/:countryId', countryController.show)

// This will post a new country to the my countries field
router.post('/:userId/countries', countryController.create)

// This will add a country into my favorites field
router.post('/:userId/countries/:countryId', countryController.favorite)

// Update a country in the database
router.put('/:userId/countries/:countryId', countryController.update)

// Delete a country from the database
router.delete('/:userId/countries/:countryId', countryController.delete)

module.exports = router