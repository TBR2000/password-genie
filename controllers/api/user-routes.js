const router = require('express').Router();
const User = require('../../models/User');

// CREATE new user
router.post('/', async (req, res) => {

  });

// Login - finds the user given username. Sets session if user exists. 
// Otherwise throw 500
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ 
      where: { 
        email: req.body.usernameOrEmail,
        $or: [
          {
              username: req.body.usernameOrEmail
          }
        ]
      }
    });

    // console.log(JSON.stringify(user));

    // if (!user) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    // const validPassword = await user.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    req.session.save(() => {
      // req.session.user_id = user.id;
      req.session.logged_in = true;
      
      res.json({ message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
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
