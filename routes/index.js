const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');



router.get('/', homeController.home);
router.get('/signup', userController.signUp); 
router.get('/about',homeController.about); 
router.get('/cart',homeController.cart); 
router.get('/heritage',homeController.heritage);


router.use('/login', require('./logins')); 
router.use('/brewtiful-gifts', require('./gifts'));
router.use('/brewer-service', require('./services'));
router.use('/brew-pay', require('./pay'));
router.use('/brew-havens', require('./havens'));




// router.use('/api', require('./api'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;