const User = require('../models/User')
const Country = require('../models/Country')

// Show the users dashboard page
router.get('/:userId', (req, res) => {
  res.send('This is the dashboard page for the user and will show the username and countries associated')
})

// This will post a new country to the database
router.post('/:userId/countries', (req, res) => {
  res.send('This will add a new country to the database')
})

// Update a user in the database
router.put('/:userId', (req, res) => {
  res.send('Action to update a user in the database')
})

// Update the name of a country in the database
router.put('/:userId/countries/:countryId', (req, res) => {
  res.send('This will update the name of a country in the database')
})

// Delete a user from the database
router.delete('/:userId', (req, res) => {
  res.send('Action to delete a user from the database')
})

// Delete a country from the database
router.delete('/:userId/countries/:countryId', (req, res) => {
  res.send('This will delete a country from the database')
})

module.exports = router