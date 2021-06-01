const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  });

// Login - finds the user given username. Sets session if user exists. 
// Otherwise throw 500
router.post('/login', async (req, res) => {
  });

// Logout - if user is signed in, destroy session. Else, throw 404?
router.post('/logout', (req, res) => {
  });

module.exports = router;
