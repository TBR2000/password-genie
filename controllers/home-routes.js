const router = require('express').Router();
const withAuth = require('../utils/auth');
const Passwords = require ('../models/Passwords');


//GET(/) -- gets a list of passwords for the signed in user. User must be logged in
router.get('/', withAuth, async (req, res) => {
  try {
    const passwordData = await Passwords.findAll({where: { user_id: req.session.userId }});
    const passwords = passwordData.map((password) => password.get({ plain: true }));
    res.render('passwords', 
      { 
        passwords, 
        loggedIn: req.session.loggedIn, 
        username: req.session.username
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add_new', withAuth, async (req, res) => {
  try {

    res.render('new-form', 
      { 
        password: {website: "", url: "", user_name: "", saved_password: "" }, 
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit_password/:id', withAuth, async (req, res) => {
  try {
    const passwordData = await Passwords.findByPk(req.params.id);
    passwordData.saved_password = await passwordData.decryptPassword(passwordData.saved_password);
    
    if (!passwordData) {
      res.status(404).json({ message: 'No Passwords found with this id!' });
      return;
    }

    const password = passwordData.get({ plain: true });
    res.render("edit", {
      password,
      loggedIn: req.session.loggedIn,
      username: req.session.username
    });
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