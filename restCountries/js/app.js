const loadingData = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data.slice(0,21))
  }
  catch(error){
    console.log(error)
  }
}

const showData = (data) => {
  const countryData = document.getElementById('countryData');
  countryData.innerText = '';
  data.forEach(country => {
    let subSection = document.createElement('div');
    subSection.classList.add('col');
    subSection.innerHTML = `
    <div class="card p-3" style="background-color: gray">
      <img src="${country.flags.png}" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h6 class="card-title">Name : ${country.name.common}</h6>
        <h5 class="card-title">Capital : ${country.capital ? country.capital[0] : 'No-Capital'}</h5>
        <button onclick="modalData('${country.cca2}')" type="button" class="btn btn-dark mt-3 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">ShowDetails</button>
      </div>
    </div>
    `;
    countryData.appendChild(subSection);
  })
  
}

const modalData = async (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showModalData(data[0])
  }
  catch(error){
    console.log(error)
  }
}

const showModalData = (data) => {
  console.log(data)
  const modalSection = document.getElementById('modalSection');
  modalSection.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${data.name.common}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <img src="${data.flags.png}" class="w-100 mb-2" style="height: 180px">
      <span><strong>Capital</strong> : <em>${data.capital ? data.capital[0] : 'No-Capital'}</em></span><br>
      <span><strong>Area</strong> : <em>${data.area}</em></span><br>
      <span><strong>Continents</strong> : <em>${data.continents}</em></span><br>
      <span><strong>Population</strong> : <em>${data.population}</em></span><br>
      <span><strong>Region</strong> : <em>${data.region}</em></span><br>
      <span><strong>StartOfWeek</strong> : <em>${data.startOfWeek}</em></span><br>
      <span><strong>TimeZones</strong> : <em>${data.timezones}</em></span><br>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
  `;
}

const loadAllData = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  try{
    const res = await fetch(url)
    const data = await res.json()
    showData(data)
  }
  catch(error){
    console.log(error)
  }
}


loadingData();