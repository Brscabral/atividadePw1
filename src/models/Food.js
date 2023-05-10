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

function buscarfoods(id){
  return foods.findIndex(food => food.id == id)
}

function UpdateFoods(id, name, price, categoria){
  const index = foods.findIndex((food) => food.id === id)
  if(index >= 0){

    foods[index].name = name
    foods[index].price = price
    foods[index].categoria = categoria
  }else{
    console.log("Erro!")
  }
}

function deletaFoods(id){
  let index = buscarfoods(id);
  foods.splice(index,1)
}



module.exports = { create, readAll, filtrarCategorias, buscarfoods, deletaFoods, UpdateFoods };
