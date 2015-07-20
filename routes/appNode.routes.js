var express = require('express');

var NodeController = require('../controllers/appNode.ctrl.js');

var router = express.Router();

//Create
router.get('/new', NodeController.new);
router.post('/', NodeController.create);

//Read
router.get('/', NodeController.index);
router.get('/:id/show', NodeController.show);

//Update
router.get('/:id/edit', NodeController.edit);
router.put('/:id', NodeController.update);

//Delete
router.delete('/:id', NodeController.destroy);

module.exports = router;