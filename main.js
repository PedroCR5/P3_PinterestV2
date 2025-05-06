import './style.css';
import { createButton } from './src/components/button/button';
import { createCards } from './src/components/card/Card';
import { createColumns } from './src/components/cardContainers/cardContainer';
export let windowWidth = (window.innerWidth / 2.3);
export { numberOfColumns, imagesListPerson };
let numberOfColumns = 2;
if (window.innerWidth < 500) {
  numberOfColumns = 2;
} else if (window.innerWidth > 1300) {
  numberOfColumns = 5;
}
else {
  numberOfColumns = 3;
}
const divApp = document.querySelector("#app");
divApp.innerHTML =
  `<header>
  <div class="headerContainer">
    <img class="iconePinterest" src="./assets/pinterest_logo.png" alt="pinterest">
    <div class="desktopHeader">
        ${createButton({ texto: "Inicio", size: "s", classInfo: `desktopButton initial` })}
        ${createButton({ texto: "Explorar", size: "s", classInfo: `desktopButton` })}
        ${createButton({ texto: "Crear", size: "s", classInfo: `desktopButton` })}
      </div>
    <div class="headerSearchContainer">
      <span class="icon">🔍</span>
      <input class="inputInfo" id="word" type="text" placeholder=" Buscar...">
    </div>
        <img class="desktopIconCampana iconePinterest" src="./assets/campana.png" alt="campana">
        <img class="desktopIconComments iconePinterest" src="./assets/comentarios.png" alt="comentarios">
    ${createButton({ texto: "D", size: "s", classInfo: "upRightButton" })}
  </div>
</header> 
<div class="myDiv"></div>
<main> 
<div class="mainContainerCards2"></div> 
</main>`;
createColumns()
const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
const endPoint = 'https://api.unsplash.com/search/photos';
let imagesList = {}
async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  if (imagesList.length === 0) {
    getImages('gatos');
    alert("¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...");
    getImagesPerson('man');
    getImagesPerson('person');
  }
  else {
    createCards(imagesList);
    getImagesPerson('man');
    getImagesPerson('person');
  }
}
getImages('dog');
let firstWord = 'nada de nada';
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    console.log(firstWord);
    if (firstWord === 'nada de nada') {
      firstWord = event.target.value;
      console.log(firstWord);
    }
    console.log(firstWord);
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };
};
let imagesListP = []
const imagesListPerson = []
async function getImagesPerson(queryPerson) {
  let response = await fetch(endPoint + '?query=' + queryPerson + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesListPersonA = await jsonResponse.results;
  imagesListP = await jsonResponse.results;
  if (queryPerson === 'person') {
    for (let k = 0; k < 4; k++) {
      const element = document.getElementById(`miImagenCanvas${k}`);
      element.src = imagesListPersonA[0].urls.small;
      const elementName = document.querySelector(`.cardPUser${k}`);
      elementName.innerText = imagesListPersonA[8].user.first_name + " " + imagesListPersonA[0].user.last_name;
    }
  } else {
    for (let k = 4; k < 10; k++) {
      const element = document.getElementById(`miImagenCanvas${k}`);
      element.src = imagesListPersonA[0].urls.small;
      const elementName = document.querySelector(`.cardPUser${k}`);
      elementName.innerText = imagesListPersonA[0].user.first_name + " " + imagesListPersonA[0].user.last_name;
    }
  }
  return imagesListPersonA
}
getImagesPerson('man');
getImagesPerson('person');