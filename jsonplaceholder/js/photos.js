function getData(){
  const urlAPI = `https://jsonplaceholder.typicode.com/photos`;
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
    div.classList.add('allDiv')
    div.innerHTML = `
    <ul>
      <li>id: ${data.id}</li>
      <li>albumId: ${data.albumId}</li>
      <li>title : ${data.title}</li>
      <li>link: <a href='${data.url}'>url data</a></li>
      <li>thumbnail : <a href='${data.thumbnailUrl}'>Url data</a></li>
    </ul>
    `;
    container.appendChild(div)
  }
}

getData()