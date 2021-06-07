const router = require('express').Router();
const withAuth = require('../utils/auth');

//GET(/) -- gets a list of passwords for the signed in user. User must be logged in
router.get('/', withAuth, async (req, res) => {
    //GET ALL Passwords and render the following pag
    res.render('passwords');
  });

  //GET(/) -- gets a list of passwords for the signed in user. User must be logged in
router.get('/passwords', withAuth, async (req, res) => {
  //GET ALL Passwords and render the following pag
  res.render('passwords');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

  module.exports = router;