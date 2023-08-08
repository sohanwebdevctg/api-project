function getData(){
  const urlData = `https://jsonplaceholder.typicode.com/todos`;
  fetch(urlData)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

function loadData(data){
  const datas = data;
  const container = document.getElementById('container');
  for(const data of datas){
    const div = document.createElement('div');
    div.classList.add('allDiv');
    div.innerHTML = `
    <ul>
      <li>id : ${data.id}</li>
      <li>userId : ${data.userId}</li>
      <li>title : ${data.title}</li>
      <li>completed : ${data.completed === true ? 'this is available' : 'not available'}</li>
    </ul>
    `;
    container.appendChild(div)
  }
}

getData();