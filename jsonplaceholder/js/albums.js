function getData(){
  const urlAPI = `https://jsonplaceholder.typicode.com/albums`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

function loadData(data){
  const datas = data;
  const container = document.getElementById('container');
  for(const data of datas){
    console.log(data)
    const div = document.createElement('div');
    div.classList.add('allDiv');
    div.innerHTML = `
      <ul>
        <li>id : ${data.id}</li>
        <li>userId : ${data.userId}</li>
        <li>title : ${data.title}</li>
      </ul>
    `;
    container.appendChild(div);
  }
}

getData();