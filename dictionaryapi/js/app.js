const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

const wordBtn = () => {
  const inputData = document.getElementById("inputData").value;
  fetch(`${urlAPI}${inputData}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0])
  const wordItems = document.getElementById("wordItems");
  wordItems.innerHTML = `
  <p><b>word:</b> ${data[0].word === true ? 'no-word' : data[0].word}</p>
  <p><b>partOfSpeech:</b> ${data[0].meanings[0].partOfSpeech === true ? 'no-word' : data[0].meanings[0].partOfSpeech}</p>
  <p><b>synonyms:</b> ${data[0].meanings[0].synonyms[0] || "none"}</p>
  <p><b>definitions:</b> ${data[0].meanings[0].definitions[0].definition}</p>
  <p><b>example:</b> ${data[0].meanings[0].definitions[0].example || "none"}</p>
    <audio controls>
      <source src="${data[0].phonetics[0].audio}" type="audio/ogg">
      <source src="${data[0].phonetics[0].audio}" type="audio/mpeg">
    </audio>
  `;
  });
}