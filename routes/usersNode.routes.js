var express = require('express');

var UsersController = require('../controllers/usersNode.ctrl.js');

var router = express.Router();

// Create
router.get('/users/new', UsersController.new);
router.post('/users(.:format)?', UsersController.create);
// Read
router.get('/users(.:format)?', UsersController.index);
router.get('/users/(:id)(.:format)?', UsersController.show);
// Update
router.get('/users/:id/edit', UsersController.edit);
router.put('/users/(:id)(.:format)?', UsersController.update);
// Delete
router.delete('/users/(:id)(.:format)?', UsersController.destroy);

module.exports = router;