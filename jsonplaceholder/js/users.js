function getData(){
  const urlAPI = `https://jsonplaceholder.typicode.com/users`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => loadData(data))
}

function loadData(data){
  const container = document.getElementById('container');
  const datas = data;
  for(const data of datas){
    const div = document.createElement('div');
    div.classList.add('childs');
    div.innerHTML = `
      <ul>
        <li>id: ${data.id}</li>
        <li>name: ${data.name}</li>
        <li>username: ${data.username}</li>
        <li>email: ${data.email}</li>
        <li>city: ${data.address.city}</li>
      </ul>
    `;
    container.appendChild(div);
  }
}

getData();