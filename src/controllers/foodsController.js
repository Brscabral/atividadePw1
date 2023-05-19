const Food = require('../models/Food');
const { up } = require('../seeders');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
//const btn = document.getElementById('#btnEnviar')
let id=5;

const users=[{
  _id: 1,
  username: "adm",
  senha: '$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW',

}]



function Passport(passport){

  function findUser(username){
  return users.find(item=> item.username === username)
  }
  
  function findUserId(Id){
    return users.find(item=> item._id === Id)
    }
    passport.serializeUser((user, done) =>{
      done(null, user._id)
    })

    passport.deserializeUser((Id, done) =>{
      try{
        const user = findUserId(Id);
        done(null, user);
      }
      catch(err){
          console.log(err)
          return done(err, null)
      }
    })
    passport.use(new LocalStrategy({
      usernameField: "username",
      passwordField: "senha"
    },
    (username, senha, done)=>{
      try{
        const user = findUser(username);
        if(!user){
          return done(null, false)
        }

        const isValid = bcrypt.compareSync(senha, user.senha);
        if(!isValid){
          return done(null,false);
        }else{
          return done(null, user)
          console.log(user)
        }
      }
      catch(err){
        console.log(err);
        return done(err, false)
      }
    }))
}


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
const loguin = (req,res) =>{
  res.render('foods/loguin.ejs');
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

    

    //const autenticacao()
    
  }

module.exports = { index, home, categoria, createCategoria, deletaFoods, updateFoods, update, loguin, Passport};
