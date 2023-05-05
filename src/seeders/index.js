const Food = require('../models/Food');
const comidas =[]

function up() {
  Food.create({
    name: 'Salada',
    image: '/imgs/salada.jpg',
    price: 15.5,
    categoria: 'Comida'
    
  });

  Food.create({
    name: 'Hambúrguer',
    image: '/imgs/hamburguer.jpg',
    price: 10,
    categoria: 'Comida'
  });

  Food.create({
    name: 'Sanduíche',
    image: '/imgs/sanduiche.jpg',
    price: 9,
    categoria: 'Comida'
  });
  Food.create({
    name: 'Agua',
    image: '/imgs/agua.jpg',
    price: 9,
    categoria: 'Bebida'
  });
  Food.create({
    name: 'Suco',
    image: '/imgs/suco.jpg',
    price: 9,
    categoria: 'Bebida'
  });
}

module.exports = { up };
