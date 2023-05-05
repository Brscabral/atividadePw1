const Food = require('../models/Food');
let responseSent = false;

const index = (req, res) => {
  const categoria = req.query.categoria
  //const categoriasValidas = ['Comida', 'Bebida'];

  //let controle = false;
  //const foods = Food.readAll();

  //res.render('foods/index.njk', { foods });

  if (!categoria) {
    const foods = Food.readAll();
    res.render('foods/index.njk', { foods });
  } else {
    const alimentosCategorias = Food.filtrarCategorias(Food.readAll(), categoria);
    res.render('foods/index.njk', { foods: alimentosCategorias });
  }

  //switch(categoria){
   // case 'Comida':
   // res.render('foods/comida.ejs')
   // break;

  //  case 'Bebida':
   //   res.render('foods/bebida.ejs')
   //   break;

   // default:
    //  break;

  //}


};

module.exports = { index };
