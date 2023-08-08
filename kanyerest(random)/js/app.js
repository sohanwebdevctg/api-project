const getData = () => {
  const urlAPI = `https://api.kanye.rest/`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

const loadData = (datas) => {
  const cardBody = document.getElementById('cardBody');
  cardBody.innerText = datas.quote;
}

getData();