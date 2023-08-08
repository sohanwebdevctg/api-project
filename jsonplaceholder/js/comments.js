function getData(){
  const urlAPI = `https://jsonplaceholder.typicode.com/comments`;
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
      <li>id : ${data.id}</li>
      <li>postId : ${data.postId}</li>
      <li>postId : ${data.name}</li>
      <li>postId : ${data.email}</li>
      <li>postId : ${data.body}</li>
    </ul>
    `;
    container.appendChild(div);
  }
}

getData();