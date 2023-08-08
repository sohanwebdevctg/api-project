//getData an api
const getData = async () => {
  
  const urlAPI = `https://forbes400.onrender.com/api/forbes400?limit=09`;
    //loader sectin start
    const loader = document.getElementById('loader');
    loader.classList.remove('d-none');
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    loadData(data);
  }catch(error){
    console.log(error);
  }
}

//loadData
const loadData = (datas) => {

  //button
  const showAll = document.getElementById('showAll');
  if(datas.length === 9){
    showAll.classList.remove('d-none');
  }else{
    showAll.classList.add('d-none');
  }

  const personItems = document.getElementById('personItems');
  personItems.textContent = '';
  datas.forEach((data)=> {
    console.log(data)
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-dark text-white p-3">
      <h5 class="text-center">${data.lastName}(${data.industries[0]})</h5>
      <div class="d-flex justify-content-center">
        <div style="border-right: 2px solid white;">
          <img src="${data.squareImage ? data?.squareImage : '../img/download.jfif'}" width="150px">
          <span><b>Source: </b> <span class="text-danger">BBC NEWS</span></span><br>
        </div>
        <div class="ps-2">
        <span><b>Name: </b> <span class="text-danger">${data.person ? data.person.name : 'No-name'}</span></span><br>
        <span><b>Citizenship: </b> <span class="text-danger">${data.countryOfCitizenship}</span></span><br>
        <span><b>City: </b> <span class="text-danger">${data.city}</span></span><br>
        <span><b>TotalShare: </b> <span class="text-danger">${data.privateAssetsWorth}</span></span><br>
        <span><b>Position: </b> <span class="text-danger">${data.position}</span></span><br>
        <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails('${data.naturalId}')">show</button>
        </div>
      </div>
    </div>
    `;
    personItems.appendChild(div);
  });
  // loader section end
  const loader = document.getElementById('loader');
  loader.classList.add('d-none');
}

getData();

const showAllBtn = async () => {
  const urlAPI = `https://forbes400.onrender.com/api/forbes400/`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    loadData(data);
  }catch(error){
    console.log(error);
  }
}

