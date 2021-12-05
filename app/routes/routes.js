var express = require('express');
var router = express.Router();
var controllers = require('../controllers/UserController');
var controllers1 = require('../controllers/homeController');


router.get('/',controllers1.index);
router.get('/', controllers.getSignUp);
router.post('/', controllers.postSignUp);


module.exports = router;