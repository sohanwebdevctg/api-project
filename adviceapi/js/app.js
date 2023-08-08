const adviceFun = () => {
  const urlAPI = `https://api.adviceslip.com/advice`;
  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const adviceId = document.getElementById("adviceId");
    adviceId.innerText = data.slip.id;
    const advice = document.getElementById("advice");
    advice.innerText = data.slip.advice;
  })
}