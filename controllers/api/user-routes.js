const router = require('express').Router();

// CREATE new user
router.post('/', async (req, res) => {

  });

// Login - finds the user given username. Sets session if user exists. 
// Otherwise throw 500
router.post('/login', async (req, res) => {
  req.session.save(() => {
    req.session.loggedIn = true;
    res.status(200).json({ message: 'You are now logged in!' });
  });
});

// Logout - if user is signed in, destroy session. Else, throw 404?
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
