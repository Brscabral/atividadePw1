const Food = require('../models/Food');
const { up } = require('../seeders');
//const btn = document.getElementById('#btnEnviar')
let id=5;


const index = (req, res) => {
  const categoria = req.query.categoria
 

  if (!categoria) {
    const foods = Food.readAll();
    res.render('foods/index.njk', { foods });
  } else {
    const alimentosCategorias = Food.filtrarCategorias(Food.readAll(), categoria);
    res.render('foods/index.njk', { foods: alimentosCategorias });
  }


};
const home =(req, res) =>{
  res.render('foods/home.ejs');

}
const categoria=(req,res) =>{
res.render('foods/categorias.ejs');
}

const update = (req,res) =>{
  const id = req.params.id;
  const Selectfood = Food.retornaFoods(id);
  res.locals.food = Selectfood;
  res.render('foods/updatelanche.ejs');
}




const createCategoria =(req,res) =>{
  const { name, price, categoria } = req.body;
  if(categoria == 'Comida' || categoria=='Bebida'){
    id++;
    Food.create({
      name,
      image : '',
      price,
      categoria,
      id: id
  
    })
    
  res.redirect('/foods/home');
  console.log("Lanche criado com sucesso!");
  }else{
    console.log("Categoria invalida!")
  }
  
 

}
const deletaFoods = (req, res) =>{
  const id = req.params.id;
  Food.deletaFoods(id); 
  res.redirect('/foods/home');
  }

  const updateFoods = (req,res) =>{
    const id = req.params.id;
    const { name, price, categoria } = req.body;
    console.log("parametro: " + id);
    const index = Food.retornaFoods(id);
    if(index.id){
    index.name = name;
    index.price = price;
    index.categoria = categoria;
    res.redirect('/foods/home');
      

    }else{
      res.send("Parametros invalidos");
    }
    
  }

module.exports = { index, home, categoria, createCategoria, deletaFoods, updateFoods, update};
