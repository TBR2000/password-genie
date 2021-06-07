 const router = require('express').Router();
 const Passwords = require ('../models');


//GET password by ID route (/:id)
router.get('/:id', async (req, res) => {
  try {
    const passwordData = await Passwords.findByPk(req.params.id);

    if (!passwordData) {
      res.status(404).json({ message: 'No Passwords found with this id!' });
      return;
    }

    res.status(200).json(passwordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add new password route (POST) (/)
router.post('/', async (req,res) => {
    try {
        const passwordData = await Passwords.create(req.body);
        res.status(200).json(passwordData);
    } catch {
        res.status(400).json(err);
    }
});

//Modify password route (PUT) (/:id)
router.put('/:id', async (req,res) => {
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
    res.status(500).json(err);
  }
});

//DELETE password route (/:id)
router.delete('/:id', async (req,res) => {
  try {
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
    res.status(500).json(err);
  }
});

module.exports = router;