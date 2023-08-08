const getData = () => {
  const urlAPI = `https://randomuser.me/api/?gender=female`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

const loadData = (datas) => {
  console.log(datas.results[0])
  const cardBody = document.getElementById('cardBody');
  const div = document.createElement('div');
  div.innerHTML = `
    <img class='rounded' src='${datas.results[0].picture.large}'>
    <ul>
      <li>name: ${datas.results[0].name.title + ' ' + datas.results[0].name.first+ ' ' + datas.results[0].name.last}</li>
      <li>gender : ${datas.results[0].gender}</li>
      <li>age : ${datas.results[0].dob.age}</li>
      <li>email : ${datas.results[0].email}</li>
      <li>phone : ${datas.results[0].phone}</li>
      <li>location : ${datas.results[0].location.city + ',' + datas.results[0].location.state + ',' + datas.results[0].location.country}</li>
    </ul>
  `;
  cardBody.appendChild(div);
}

getData()