// getdata from in api
const getData = async () => {
  const urlAPI = `https://openapi.programming-hero.com/api/ai/tools`;
  //spinner
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('d-none');
  try{
    const response = await fetch(urlAPI)
    const data = await response.json()
    loadData(data.data.tools.slice(0,6));
  }catch(error){
    console.log(error)
  }
}
// loadData from getData
const loadData = (data) => {
  //show button
  const seeMore = document.getElementById('seeMore');
  if(data.length === 6){
    seeMore.classList.remove('d-none')
  }else{
    seeMore.classList.add('d-none');
  }

  
  //loop all data and show
  const cardItems = document.getElementById('cardItems');
  cardItems.textContent = '';
  data.forEach((data) => {
    console.log(data)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card p-3 h-100">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <div>
          <h5 class="card-title"><b>Features</b></h5>
          <ul>
            ${data.features.join('<li></li>')}
          </ul>
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h6><b>${data.name}</b></h6>
            <p>${data.published_in}</p>
          </div>
          <div>
            <button onclick="modalData('${data.id}')" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">click</button>
          </div>
        </div>
      </div>
    </div>
    `;
    cardItems.appendChild(div);
  });
  //spinner
  const spinner = document.getElementById('spinner');
  spinner.classList.add('d-none');
}

//modalData
const modalData = async (id) => {
  const urlAPI = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  try{
    const response = await fetch(urlAPI)
    const data = await response.json()
    modalSec(data.data)
  }catch(error){
    console.log(error)
  }
}

const modalSec = (data) => {
  const features = Object.values(data.features);
  const modalItem = document.getElementById('modalItem');
  modalItem.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h6>${data.description}</h6>
              <ul class="d-flex justify-content-evenly align-items-center gap-2">
                <li class="bg-danger text-center" style="font-size:13px;">
                  <span>${data.pricing ? data.pricing[0].price : 'Free of cost'}</span><br>
                  <span>${data.pricing ? data.pricing[0].plan : '/Basic'}</span>
                </li>
                <li class="bg-success text-center" style="font-size:13px;">
                  <span>${data.pricing ? data.pricing[1].price : 'Free of cost'}</span><br>
                  <span>${data.pricing ? data.pricing[1].plan : '/Pro'}</span>
                </li>
                <li class="bg-warning text-center" style="font-size:13px;">
                  <span>${data.pricing ? data.pricing[2].price.slice(0,10) : 'Free of cost'}</span><br>
                  <span>${data.pricing ? data.pricing[2].plan : '/Enterprise'}</span>
                </li>
              </ul>
              <div class="d-flex justify-content-between">
                <div>
                  <h6>Features</h6>
                  <ul>
                  ${features.map(feat => {
                    return `<li style="font-size:13px;">${feat.feature_name}</li>`
                  }).join('')}
                  </ul>
                </div>
                <div>
                  <h6>Integration</h6>
                  <ul>
                    ${data.integrations === null ? 'null' : data.integrations.map(integration => {
                      return `<li style="font-size:13px;">${integration}</li>`
                    }).join('')}
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 p-2">
            <img src="${data.image_link ? data.image_link[0] : 'no-image'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h6>${data.input_output_examples ? data.input_output_examples[0].input : "Can you give me any Example?"}</h6>
              <p>${data.input_output_examples ? data.input_output_examples[0].output : "Not Not Not Yet?Take a break"}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  `;
}

//seeMoreBtn
const seeMoreBtn = async () =>{
  const urlAPI = `https://openapi.programming-hero.com/api/ai/tools`;
  try{
    const response = await fetch(urlAPI)
    const data = await response.json()
    loadData(data.data.tools);
  }catch(error){
    console.log(error)
  }
}

getData();