
/*
!El Responsive

Uno de los requisitos clave era que la página fuera responsive, como continuación del trabajo anterior en HTML y CSS. Pero ahora mismo no lo es para nada.

!Notas
La página no es responsive.

Al abrir la página, aparece este error:
initialError
initialError
608×125 3.24 KB
El primer fetch lanza 5 peticiones, algunas con queries diferentes como dog, man, person:
initalFetch
initalFetch
949×426 107 KB

Mejora la legibilidad del código, no tienes apenas saltos de línea, y eso hace muy tedioso seguir la lógica. Agrúpalo visualmente mejor.

!Puntos positivos
Usas bien los template literals en varias partes. Me sorprende que luego no los uses de forma más clara en Card.js…
La estructura general de carpetas y archivos está bien pensada, con componentes y sus estilos separados. Aun así, podrías dividir más: separar lógica de peticiones, pintado, etc.
!Mejoras opcionales
El font podría tener más personalidad, y podrías trabajar un poco más los detalles: outline en el focus, tamaños de íconos, etc… */
//?Hacer mas grandes las cards
//? reducir circulos


import './style.css';
import { createButton } from './src/components/button/button';
import { getImagesPerson } from './src/components/personInfo/personInfo';
import { getImages } from './src/components/infoAPI/infoAPI';
import { funcionAEjecutar } from './src/components/modal/modal';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
export { element1Src, element2Src, elementName1InnerText, elementName2InnerText };
export let imagesList = {}

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
  <h2 class="notificationH2">¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...</h2>
  ${createButton({ texto: "Intentar de nuevo", size: "s", classInfo: `tryAgain` })}
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

//! Pinchar en icono Pinterest para refrescar la primera búsqueda
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };
};