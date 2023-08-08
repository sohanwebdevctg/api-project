//getData in api
const getData = async (searchText, dataLimit) => {
  const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    loadData(data.drinks, dataLimit);
  }catch(error){
    console.log(error);
  }
}

//loadData in api
const loadData = (drinks, dataLimit) => {
  const imgItems = document.getElementById('imgItems');
  //newdata add
  imgItems.textContent = '';

  //message
  const message = document.getElementById('message');
  if(drinks === null){
    message.classList.remove('d-none');
  }else{
    message.classList.add('d-none');
  }
  //slice data
  const showAll = document.getElementById('showAll');
  if(dataLimit && drinks.length > 6){
    drinks = drinks.slice(0,6);
    showAll.classList.remove('d-none');
  }else{
    showAll.classList.add('d-none');
  }

  drinks.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('image');
    div.classList.add('my-3');
    div.innerHTML = `
    <img src="${data.strDrinkThumb}" class="w-75" onclick="modalId(${data.idDrink})" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <h6 class="text-danger">${data.strDrink}</h6>
    `;
    imgItems.appendChild(div);
  });
  //loader
  loader(false);
}

//modalId section
const modalId = async (id) => {
  const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    modal(data.drinks[0]);
  }catch(error){
    console.log(error);
  }
}

//modal section
const modal = (datas) =>{
  console.log(datas);
  const exampleModalLabel = document.getElementById('exampleModalLabel');
  exampleModalLabel.innerText = datas.strDrink;
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
  <img src="${datas.strDrinkThumb}" class="img-fluid">
  <div>
    <span><b>Category : </b>${datas.strCategory}</span><br>
    <span><b>Drink : </b>${datas.strDrink}</span><br>
    <span><b>strInstructions : </b>${datas.strInstructions}</span><br>
  </div>
  `;
}


//loader
function loader(isLoader) {
  const loader = document.getElementById('loader');
  if (isLoader) {
    loader.classList.remove('d-none');
  } else {
    loader.classList.add('d-none');
  }
}

const allDataShow = (dataLimit) => {
  //loader
  loader(true);
  const searchValue = document.getElementById('searchText');
  const searchText = searchValue.value;
  getData(searchText, dataLimit);
  searchValue.value = '';
}

//searchText
document.getElementById('searchBtn').addEventListener('click', function(){
  allDataShow(6);
});

//showAllBtn
document.getElementById('showAllBtn').addEventListener('click', function (){
  allDataShow();
})

getData('lemon',6);
