const shrtData = async () => {
  const inputData = document.getElementById('inputData').value;
  const urlAPI = `https://api.shrtco.de/v2/shorten?url=${inputData}`;
  fetch(urlAPI)
  .then(response => response.json())
  .then(data => {
    
    const linkSide = document.getElementById('linkSide');
    linkSide.innerHTML = `
    <a href="${data.result.full_short_link}" target="_blank">${data.result.short_link}</a>
    `;
  })
}