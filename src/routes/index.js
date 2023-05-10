const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');

//router.get('/', (req, res) => res.redirect('/foods/index'));
router.get('/', (req, res) => res.redirect('/foods/home'));
router.get('/foods/home',foodsController.home);
router.get('/foods/index', foodsController.index);
router.get('/foods/categorias', foodsController.categoria);
router.post('/foods/categorias', foodsController.createCategoria);
//router.get('/foods/index/:id', foodsController.index);
router.get('/foods/index/:id', foodsController.deletaFoods);
router.get('/foods/atualiza/:id', foodsController.update);
router.put('/foods/atualiza/:id', foodsController.updateFoods);
module.exports = router;
