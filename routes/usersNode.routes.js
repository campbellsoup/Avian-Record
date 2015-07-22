var express = require('express');

var UsersController = require('../controllers/usersNode.ctrl.js');

var router = express.Router();

// Create
router.get('/users/new', UsersController.new);
router.post('/users', UsersController.create);
// Read
router.get('/users', UsersController.index);
router.get('/users/(:id)', UsersController.show);
// Update
router.get('/users/:id/edit', UsersController.edit);
router.put('/users/:id', UsersController.update);
// Delete
//router.delete('/user/:id', UsersController.destroy);

module.exports = router;