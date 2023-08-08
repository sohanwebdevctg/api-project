//getData from api
const getData = async (searchDataValue, allData) => {
  const urlAPI = `https://openapi.programming-hero.com/api/phones?search=${searchDataValue}`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    loadData(data.data, allData)
  }catch(error){
    console.log(error);
  }
}

//loadData from getData
const loadData = (datas,allData) => {
  //cardItem
  const cardItem = document.getElementById('cardItem');
  cardItem.textContent = '';

  //showAllData
  const showAll = document.getElementById('showAll');
  if(allData && datas.length > 6){
    datas = datas.slice(0,6);
    showAll.classList.remove('d-none');
    cardItem.classList.add('bg-secondary-subtle');
  }else{
    showAll.classList.add('d-none');
  }

  //showmessage
  const message = document.getElementById('message');
  if(datas.length === 0){
    message.classList.remove('d-none');
  }else{
    message.classList.add('d-none');
  }

  //col
  datas.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 p-3">
      <img src="${data.image}" class="card-img-top w-75 mx-auto" alt="...">
      <div class="card-body">
        <h5><b>Brand: </b> ${data.brand}</h5>
        <h6><b>PhoneName: </b> ${data.phone_name}</h6>
        <p><b>Model: </b> ${data.slug}</p>
      </div>
      <div>
        <button onclick="modalBtn('${data.slug}')" class="btn btn-success w-100" type="button"data-bs-toggle="modal" data-bs-target="#exampleModal">PhoneDetails</button>
      </div>
    </div>
    `;
    cardItem.appendChild(div);
  });
  loading(false);
}

const modalBtn = async(slug) => {
  const urlAPI = `https://openapi.programming-hero.com/api/phone/${slug}`;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    showModalData(data.data);
  }catch(error){
    console.log(error);
  }
}

const showModalData = (data) => {
  console.log(data)
  const modalBox = document.getElementById('modalBox');
  modalBox.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${data.brand}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="text-center">
        <img src="${data.image}" class="w-50">
      </div>
      <div>
        <span><b>Name:</b>${data.name}</span><br>
        <span><b>RelaseData:</b>${data.releaseDate}</span><br>
        <span><b>ChipSet:</b>${data.mainFeatures ? data.mainFeatures.chipSet : 'no-chipset'}</span><br>
        <span><b>DisplaySize:</b>${data.mainFeatures ? data.mainFeatures.displaySize : 'no-displaySize'}</span><br>
        <span><b>Memory:</b>${data.mainFeatures ? data.mainFeatures.memory : 'no-memory'}</span><br>
        <span><b>Storage:</b>${data.mainFeatures ? data.mainFeatures.storage : 'no-storage'}</span><br>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  `;
}

const loading = (isLoading) => {
const loader = document.getElementById('loader');
  if(isLoading){
    loader.classList.remove('d-none');
  }else{
    loader.classList.add('d-none');
  }
}

//allData function
const allData = (allData) => {
  loading(true);
  const searchData = document.getElementById('searchData');
  const searchDataValue = searchData.value;
  getData(searchDataValue,allData);
}

//searchBtn
document.getElementById('searchBtn').addEventListener('click', function () {
  allData(6);
});

//input key enter
document.getElementById('searchData').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    allData(6);
  }
});

//showAllBtn
document.getElementById('showAllBtn').addEventListener('click', function () {
  allData();
});
