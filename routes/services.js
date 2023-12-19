const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/service_controller');



router.get('/',serviceController.order);
router.get('/coffee',serviceController.coffee); 
router.get('/speciality',serviceController.speciality); 
router.get('/tea',serviceController.tea); 
router.get('/snacks',serviceController.snacks); 
router.get('/deserts',serviceController.deserts); 
router.get('/refreshments',serviceController.refreshments); 
router.get('/kids',serviceController.kids); 




module.exports = router