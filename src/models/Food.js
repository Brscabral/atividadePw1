let key = 1;
const foods = [];

function create(foodValues) {
  const food = { id: key++, ...foodValues };

  foods.push(food);

  return food;
}

function readAll() {
  return foods;
}

function filtrarCategorias(foods, categoria) {
  return foods.filter((food) => food.categoria === categoria);
}

module.exports = { create, readAll, filtrarCategorias };
