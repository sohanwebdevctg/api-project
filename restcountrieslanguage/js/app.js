const getData = async (searchLang) => {
  const urlAPI = `https://restcountries.com/v3.1/lang/${searchLang}`;
  try{
    const response = await fetch(urlAPI)
    const data = await response.json()
    loadData(data)
  }catch(error){
    console.log(error)
  }
}

const loadData = (datas) => {
  
  const cardSection = document.getElementById('cardSection');
  cardSection.innerHTML = '';
  datas.forEach((data) => {
    console.log(data);
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <img src="${data.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <span><b>Name :</b> ${data.name.common}</span><br>
        <span><b>Area :</b> ${data.area}</span><br>
        <span><b>Regino :</b> ${data.region}</span><br>
      </div>
    `;
    cardSection.appendChild(div)
  })
}

const searchLang = () => {
  const languages = document.getElementById('languages').value;
  getData(languages)

}
getData('English')