const router = require('express').Router();
const thoughtRoutes = require('./thought-routes')
const userRoutes = require('./user-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/comments', thoughtRoutes);
router.use('/pizzas', userRoutes);

module.exports = router;