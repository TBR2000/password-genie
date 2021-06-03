const router = require('express').Router();
const withAuth = require('../utils/auth');

//GET(/) -- gets a list of passwords for the signed in user. User must be logged in

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;