 const router = require('express').Router();
 const { Passwords } = require ('../models');
 const withAuth = require('../utils/auth');

//GET password by ID route (/:id)
router.get('/:id', withAuth, async (req, res) => {
  try {
    console.log(req)
    const passwordData = await Passwords.findByPk(req.params.id);
    passwordData.saved_password = await passwordData.decryptPassword(passwordData.saved_password);
    
    if (!passwordData) {
      res.status(404).json({ message: 'No Passwords found with this id!' });
      return;
    }

    const password = passwordData.get({ plain: true });
    res.render("view", {
      password,
      loggedIn: req.session.loggedIn,
      username: req.session.username
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Add new password route (POST) (/)
router.post('/', withAuth, async (req,res) => {
    try {
        req.body.user_id = req.session.userId;
        const passwordData = await Passwords.create(req.body);
        res.status(200).json(passwordData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//Modify password route (PUT) (/:id)
router.put('/:id', withAuth, async (req,res) => {
  try {
    const passwordData = await Passwords.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    if (!passwordData[0]) {
      res.status(404).json({ message: 'No Passwords with this id!' });
      return;
    }
    res.status(200).json(passwordData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE password route (/:id)
router.delete('/:id', withAuth, async (req,res) => {
  try {
    console.log("HERE");
    const passwordData = await Passwords.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!passwordData) {
      res.status(404).json({ message: 'No Passwords found with this id!' });
      return;
    }

    res.status(200).json(passwordData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;