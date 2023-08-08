const getData = () => {
  const urlAPI = `https://restcountries.com/v3.1/all`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

const loadData = (data) => {
  const countries = document.getElementById('countries');
  data.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
      <img src='${data.flags.png}' class='w-25'>
      <ul>
        <li>name: ${data.name.common}</li>
        <li>area: ${data.area}</li>
        <li>capital : ${data.capital ? data.capital[0] : 'No-Capital'}</li>
        <button onclick="getDynamicData('${data.cca2}')" class='btn btn-success btn-sm'>details</button>
      </ul>
    `;
    countries.appendChild(div)
  })
  
}

const getDynamicData = (code) => {
  const urlAPI = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => showCountry(data[0]))
}

const showCountry = (data) => {
  console.log(data)
  const showCountry = document.getElementById('showCountry');
  showCountry.innerHTML = `
    <img src='${data.flags.png}'>
    <p>name:${data.name.common}</p>
  `;
}

getData();