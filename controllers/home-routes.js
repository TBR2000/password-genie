const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Passwords } = require ('../models/');

//GET(/) -- gets a list of passwords for the signed in user. User must be logged in

router.get('/', withAuth, async (req, res) => {
  try {
      const passwordData = await Passwords.findAll();
      res.render('passwords');
    } catch (err) {
      console.log(err);
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