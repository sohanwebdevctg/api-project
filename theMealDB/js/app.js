const loadData = async (data) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data.meals.slice(0,6))
  }
  catch(error){
    console.log(error);
  }
}

const showData = (foods) => {
  const foodItem = document.getElementById('foodItem');
  foodItem.innerText = '';
  foods.forEach(food => {
    const item = document.createElement('div');
    item.classList.add('card');
    item.innerHTML = `
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body text-center">
    <h5 class="card-title">${food.strMeal}</h5>
    <button onclick="modalData(${food.idMeal})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
    </div>
    `;
    foodItem.appendChild(item);
  })
}

const modalData = async (data) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    modalLoadData(data.meals[0])
  }
  catch(error){
    console.log(error)
  }
}

const modalLoadData = (food) => {
  console.log(food)
  const modalSections = document.getElementById('modalSection');
  modalSections.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${food.strMeal}</h1><br>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
      <div class="col-6">
        <img src="${food.strMealThumb}" class="w-100">
      </div>
      <div class="col-6">
        <div class="modalText">
          <span><b>FoodType:</b> <i>${food.strCategory},${food.strArea}</i></span><br>
          <span><b>Ingredient:</b> <i>${food.strIngredient1 + ',' + food.strIngredient2 + ',' + food.strIngredient3 + ',' + food.strIngredient4 + ',' + food.strIngredient5}</i></span><br>
          <span><b>Instructions:</b> <i>${food.strInstructions.slice(0,70)}...</i></span><br>
          <span><b>Tag:</b> <i>${food.strTags}</i></span><br>
          
        </div>
      </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  `;
}

const loadFullData = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data.meals)
  }
  catch(error){
    console.log(error);
  }
}

const inputValue = () => {
  const inputText = document.getElementById('inputText').value;
  loadData(inputText);
}

loadData('fish');