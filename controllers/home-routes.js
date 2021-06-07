const router = require('express').Router();
const withAuth = require('../utils/auth');
const Passwords = require ('../models');

//GET(/) -- gets a list of passwords for the signed in user. User must be logged in
//GET password route (/)
router.get('/', async (req, res) => {
  try {
    const passwordData = await Passwords.findAll();
    res.status(200).json(passwordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;