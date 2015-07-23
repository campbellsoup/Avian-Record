var express = require('express');

var NodeController = require('../controllers/inventoryNode.ctrl.js');

var router = express.Router();

//Create
router.get('/inventory/new', 					NodeController.new);
router.post('/inventory(.:format)?',	 		NodeController.create);

//Read
router.get('/inventory(.:format)?', 			NodeController.index);
router.get('/inventory/(:id)(.:format)?', 		NodeController.show);

//Update
router.get('/inventory/:id/edit',	 			NodeController.edit);
router.put('/inventory/(:id)(.:format)?',	 	NodeController.update);

//Delete
router.delete('/inventory/(:id)(.:format)?', 	NodeController.destroy);

module.exports = router;