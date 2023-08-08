const loadData = async(value) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data.data.slice(0,6))
  }
  catch(error){
    console.log(error)
  }
}

const showData = (datas) => {
  //noData section
  const noData = document.getElementById('noData');
  if(datas.length === 0){
    noData.classList.remove('d-none')
  }else{
    noData.classList.add('d-none')
  }
  

  //showAll button
  const showAll = document.getElementById('showAll');
  if(datas.length === 9){
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.remove('d-none');
  }

  //phoneItem section
  const phoneItem = document.getElementById('phoneItem');
  phoneItem.innerText = '';
  datas.forEach(data => {
    const phone = document.createElement('div');
    phone.classList.add('col')
    phone.innerHTML = `
    <div class="card h-100" style="height: 550px">
      <img src="${data.image}" class="card-img-top w-auto p-3" alt="...">
      <div class="card-body">
        <h5 class="card-title"><strong>Brand:</strong> <i>${data.brand}</i></h5>
        <p class="card-text"><strong>Model:</strong> <i>${data.phone_name}</i></p>
        <button onclick="showModal('${data.slug}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
      </div>
    </div>
    `;
    phoneItem.appendChild(phone)
  })
  spinner(false)
}

const showModal = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    loadModals(data.data)
  }
  catch(error){
    console.log(error)
  }
}

const loadModals = (data) => {
  console.log(data)
  const modalItems = document.getElementById('modalItem');
  modalItems.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${data.brand}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-6">
        <img src="${data.image}" class="w-100">
        </div>
        <div class="col-6">
          <span><strong>Name:</strong> <i>${data.name}</i></span><br>
          <span><strong>Model:</strong> <i>${data.slug}</i></span><br>
          <span><strong>ReleaseDate:</strong> <i>${data.releaseDate}</i></span><br>
          <span><strong>Memory:</strong> <i>${data.mainFeatures.memory}</i></span><br>
          <span><strong>Display:</strong> <i>${data.mainFeatures.displaySize}</i></span><br>
          <span><strong>Storage:</strong> <i>${data.mainFeatures.storage}</i></span><br>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  `;
}

//spinner section
const spinner = (value) => {
  const spinnerItem = document.getElementById('spinner');
  if(value){
    spinnerItem.classList.remove('d-none');
  }else{
    spinnerItem.classList.add('d-none');
  }

}


//input data with button
const inputData = () => {
  spinner(true);
  const inputText = document.getElementById('inputText');
  const inputValue = inputText.value;
  loadData(inputValue);
}

const showAllBtn = () => {
  const inputText = document.getElementById('inputText');
  const inputValue = inputText.value;
  showData(inputValue);
}

//input value
document.getElementById("inputText").addEventListener('change', (e) => {
  spinner(true)
    loadData(e.currentTarget.value);
});
