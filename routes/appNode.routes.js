var express = require('express');

var NodeController = require('../controllers/appNode.ctrl.js');

var router = express.Router();

//Create
router.get('/app/new', NodeController.new);
//router.post('/aviary', NodeController.create);

//Read
//router.get('/aviary', NodeController.index);
//router.get('/aviary/show', NodeController.show);

//Update
//router.get('/aviary/edit', NodeController.edit);
//router.put('/aviary', NodeController.update);

//Delete
//router.delete('/aviary', NodeController.destoy);

module.exports = router;