const express = require('express');
const beerController = require('../controllers/beerController');
const beerRouter = express.Router;

beerRouter.get('/', beerController.getAllBeers);

// beerRouter.use(passportAuth.isAuthenticated);

beerRouter.post('/', beerController.addBeer);

beerRouter.put('/address', beerController.updateBeer);

module.exports = beerRouter;
