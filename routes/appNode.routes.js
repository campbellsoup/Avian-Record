var express = require('express');

var NodeController = require('../controllers/appNode.ctrl.js');

var router = express.Router();

//Create
router.get('/new', NodeController.new);
router.post('/', NodeController.create);

//Read
router.get('/', NodeController.index);
//router.get('/aviary/show', NodeController.show);

//Update
//router.get('/aviary/edit', NodeController.edit);
//router.put('/aviary', NodeController.update);

//Delete
//router.delete('/aviary', NodeController.destoy);

module.exports = router;