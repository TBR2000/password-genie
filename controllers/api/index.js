const router = require('express').Router();

const userRoutes = require('./user-routes');
const generator = require('./generator');

router.use('/users', userRoutes);
router.use('/password', generator);

module.exports = router;
