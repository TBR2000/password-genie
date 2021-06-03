const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const passwordRoutes = require('./password-routes');

router.use('/', homeRoutes);
// router.use('/password', passwordRoutes);
router.use('/api', apiRoutes);

module.exports = router;
