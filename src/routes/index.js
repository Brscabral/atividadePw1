const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');
const passport = require('passport');
const session = require('express-session');
const index = require('../index')

function autenticaRota(req, res, next) {
  
    if (req.path === '/loguin') {
      return next();
    }
  
    
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/loguin');
      console.log(req.user);
      console.log(req.isAuthenticated())
    
    }
  }
  
//router.get('/', (req, res) => res.redirect('/foods/index'));
router.get('/', (req, res) => res.redirect('/loguin'));
router.get('/foods/home',foodsController.home);
router.get('/foods/index', foodsController.index);
router.get('/foods/categorias', foodsController.categoria);
router.post('/foods/categorias',foodsController.createCategoria);
//router.get('/foods/index/:id', foodsController.index);
router.get('/foods/index/:id', foodsController.deletaFoods);
router.get('/foods/atualiza/:id',foodsController.update);
router.post('/foods/atualiza/:id', foodsController.updateFoods);
router.get('/loguin',foodsController.loguin )
router.post('/loguin', passport.authenticate('local', {
    
    successRedirect: '/foods/home',
    
    failureRedirect: '/loguin?fail=true'
}))



module.exports = router;
