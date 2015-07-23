var express = require('express'),
	passport = require('passport');

var SessionsController = require('../controllers/sessionsNode.ctrl.js');

var router = express.Router();

router.get('/sessions/new', SessionsController.new);
router.post('/sessions', 	passport.authenticate('local'), SessionsController.create);

module.exports = router;