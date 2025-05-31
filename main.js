import './style.css';
import { createButton } from './src/components/button/button';
import { getImagesPerson } from './src/components/personInfo/personInfo';
import { getImages } from './src/components/infoAPI/infoAPI';
import { funcionAEjecutar } from './src/components/modal/modal';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
export { element1Src, element2Src, elementName1InnerText, elementName2InnerText };

//!Variables
let firstWord = 'nada de nada';

//! Traer info de personas
let firstPerson = await getImagesPerson('man');
let secondPerson = await getImagesPerson('person');
let element1Src = firstPerson[0].urls.small;
let elementName1InnerText = firstPerson[0].user.first_name + " " + firstPerson[0].user.last_name;
let element2Src = secondPerson[0].urls.small;
let elementName2InnerText = secondPerson[8].user.first_name + " " + secondPerson[0].user.last_name;

//! Pinto el HTML
const divApp = document.querySelector("#app");
divApp.innerHTML =
  `<header>
  <div class="headerContainer">
    <img class="iconePinterest" src="./assets/pinterest_logo.png" alt="pinterest">
    <div class="desktopHeader">
        ${createButton({ texto: "Inicio", size: "s", classInfo: `desktopButton initial buttonInfo1` })}
        ${createButton({ texto: "Explorar", size: "s", classInfo: `desktopButton buttonInfo1` })}
        ${createButton({ texto: "Crear", size: "s", classInfo: `desktopButton buttonInfo1` })}
      </div>
    <div class="headerSearchContainer">
      <span class="icon">🔍</span>
      <input class="inputInfo" id="word" type="text" placeholder=" Buscar...">
    </div>
        <img class="desktopIconCampana iconePinterest" src="./assets/campana.png" alt="campana">
        <img class="desktopIconComments iconePinterest" src="./assets/comentarios.png" alt="comentarios">
    ${createButton({ texto: "D", size: "s", classInfo: "upRightButton buttonInfo1" })}
  </div>
</header> 
<div class="myDiv"></div>
<main> 
<div class="notification" id="notification">
  <h2 class="notificationH2">¡Busqueda errónea!, por favor inténtalo con palabras como gato, perro...</h2>
  ${createButton({ texto: "Pulsa aquí para intentarlo de nuevo", size: "s", classInfo: `tryAgain` })}
</div>
<div class="mainContainerCards2">
  <div class="container1 containersList" id="div1"> </div>
</div> 
</main>`;

//! El modal
const modalButton = document.querySelector(".tryAgain");
modalButton.addEventListener("click", funcionAEjecutar);

//!Traer información inicial de la API
getImages('dog');

//!Leer palabra de busqueda y traer de la API
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (firstWord === 'nada de nada') {
      firstWord = event.target.value;
    }
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});

//! Pinchar en icono Pinterest para refrescar la primera búsqueda
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };
};