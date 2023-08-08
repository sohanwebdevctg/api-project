const loadData = async (data) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data.meals.slice(0,4))
  }
  catch(error){
    console.log(error);
  }
}

const showData = (datas) => {
  const foodItems = document.getElementById('foodItem');
  foodItems.innerText = '';
  datas.forEach(data => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.strMealThumb}" class="img-fluid rounded-start w-100 h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><i>${data.strMeal}</i></h5>
          <span class="card-text py-2 text-secondary">${data.strInstructions.slice(0,120)}...</span><br>
          <a type="button" class="card-text text-warning" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="modalItem(${data.idMeal})"><small>View Details</small></a>
        </div>
      </div>
    </div>
    `;
    foodItems.appendChild(cardDiv);
  })
}

const modalItem = async (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    modalDataLoad(data.meals[0])
  }
  catch(error){
    console.log(error)
  }
}

const modalDataLoad = (data) => {
  console.log(data)
  const modalDataSection = document.getElementById('modalDataSection')
  modalDataSection.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${data.strMeal}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <img src="${data.strMealThumb}" class="w-100">
      <div>
        <span><b>Category:</b> <i class="text-secondary">${data.strCategory}</i></span><br>
        <span><b>Area:</b> <i class="text-secondary">${data.strArea}</i></span><br>
        <span><b>Instruction:</b> <i class="text-secondary">${data.strInstructions.slice(0,230)}...</i></span><br>
        <span><b>YourTube:</b> <i class="text-secondary"><a href="#">${data.strYoutube}</a></i></span>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  `;
}

const showAllData = async () => {
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

const searchBtn = () => {
  const searchValue = document.getElementById('searchValue').value;
  loadData(searchValue)
}

loadData('fish')