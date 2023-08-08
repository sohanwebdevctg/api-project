//getData from api
const getData = async (searchDataValue, allDataShow) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchDataValue}`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    loadData(data.meals, allDataShow);
  }catch(error){
    console.log(error)
  }
}

//loadData from getData
const loadData = (datas,allDataShow) => {
  
   //message
  const message = document.getElementById('message');
  if(datas === null){
    message.classList.remove('d-none');
  }else{
    message.classList.add('d-none');
  }
  
  //cardItem
  const cardItem = document.getElementById('cardItem');
  cardItem.textContent = '';
  
  //allDataShow and datas
  const showAlls = document.getElementById('showAlls');
  if(allDataShow && datas.length > 4){
    datas = datas.slice(0,4);
    showAlls.classList.remove('d-none');
  }else{
    showAlls.classList.add('d-none');
  }


  datas.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('mb-3');
    div.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.strMealThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h6><b>Category: </b>${data.strCategory}</h6>
          <h6><b>FoodName: </b>${data.strMeal}</h6>
          <span><b>Details: </b>${data.strInstructions.slice(0,78)}...</span><br>
          <a href="#" class="text-warning">show the details</a>
        </div>
      </div>
    </div>
    `;
    cardItem.appendChild(div);
  });
  spinner(false);
}



//allData show
const allDataShows = (allDataShow) => {
  spinner(true);
  const searchData = document.getElementById('searchData');
  const searchDataValue = searchData.value;
  getData(searchDataValue, allDataShow);
}

//loader(spinner)
const spinner = (isLoader) => {
  const loader = document.getElementById('loader');
  if(isLoader){
    loader.classList.remove('d-none');
  }else{
    loader.classList.add('d-none');
  }
}


//searchBtn
document.getElementById('searchBtn').addEventListener('click', function () {
  allDataShows(4);
});

//inputenter
document.getElementById('searchData').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    allDataShows(4);
  }
});

//showAllBtn
document.getElementById('showAllBtn').addEventListener('click', function () {
  allDataShows();
});
