var express = require('express');

var NodeController = require('../controllers/pairsNode.ctrl.js');

var router = express.Router();

//Create
router.get('/pairs/new', 					NodeController.new);
router.post('/pairs(.:format)?',	 		NodeController.create);

//Read
router.get('/pairs(.:format)?', 			NodeController.index);
router.get('/pairs/(:id)(.:format)?', 		NodeController.show);

//Update
router.get('/pairs/:id/edit',	 			NodeController.edit);
router.put('/pairs/(:id)(.:format)?',	 	NodeController.update);

//Delete
router.delete('/pairs/(:id)(.:format)?', 	NodeController.destroy);

module.exports = router;