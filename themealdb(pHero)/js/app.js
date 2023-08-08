const getData = (searchData) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data.meals))
}

const loadData = (datas) => {
  let cardSection = document.getElementById('cardSection');
  cardSection.innerHTML = '';
  datas.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card w-100 h-50 overflow-hidden">
        <img src="${data.strMealThumb}" class="w-auto" alt="...">
        <div class="card-body">
        <button onclick="getModalData(${data.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">showDetails</button>
          <h6>Category: ${data.strCategory}</h6>
          <h5 class="card-title">Food Name : ${data.strMeal}</h5>
          <p class="card-text">${data.strInstructions}</p>
          
        </div>
      </div>
    `;
    cardSection.appendChild(div)
  })
}

const searchData = () => {
  let searchData = document.getElementById('inputData').value;
  getData(searchData);
}

const getModalData = (modalData) => {
    const urlAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${modalData}`;
    fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => loadModalData(data.meals[0]))
}

const loadModalData = (data) => {
  console.log(data)
  const exampleModalLabel = document.getElementById('exampleModalLabel');
  exampleModalLabel.innerText = data.strMeal;
  const bodyImg = document.getElementById('bodyImg');
  bodyImg.innerHTML = `
    <img src='${data.strMealThumb}' class='img-fluid'>
  `;
}

getData('rice');