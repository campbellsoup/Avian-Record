var express = require('express');

var NodeController = require('../controllers/appNode.ctrl.js');

var router = express.Router();

//Create
router.get('/app/new', 					NodeController.new);
router.post('/app(.:format)?',	 		NodeController.create);

//Read
router.get('/app(.:format)?', 			NodeController.index);
router.get('/app/(:id)(.:format)?', 	NodeController.show);

//Update
router.get('/app/:id/edit',	 			NodeController.edit);
router.put('/app/(:id)(.:format)?',	 	NodeController.update);

//Delete
router.delete('/app/(:id)(.:format)?', 	NodeController.destroy);

module.exports = router;