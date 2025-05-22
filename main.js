//! Revisión Mayo 2025
/* Hola Pedro,

Te comento rápido sobre el proyecto. La verdad es que veo buena iniciativa, y eso está genial, pero también noto bastante confusión con varios conceptos. Parece que estás sobrepensando algunas cosas y mezclando otras, y eso te está complicando mucho…

En algunos casos podría dejar pasar ciertos fallos, pero en tu caso necesito que entiendas bien lo que estás haciendo y que lo mejores antes de seguir avanzando en el curso.

!El Responsive

Uno de los requisitos clave era que la página fuera responsive, como continuación del trabajo anterior en HTML y CSS. Pero ahora mismo no lo es para nada.
//Tus “columnas” no están bien planteadas y, cuando vi el resto del código, me quedó claro que hay una confusión importante. Esta parte no está funcionando correctamente.

!Peticiones

Funcionalmente, las peticiones se hacen, pintas los resultados y los gatitos si no hay nada, lo cual está bien. Pero… al abrir la consola, aparecen muchas peticiones innecesarias. Eso es un problema grave: hacer peticiones que consumen recursos del usuario sin usar sus resultados, no es lo más óptimo.
Más abajo te muestro ejemplos y capturas. Esto tienes que arreglarlo sí o sí.

!Tu Componente Card.js

//Aquí es donde más me preocupé. En el main, haces cálculos con el tamaño de pantalla para decidir el número de columnas, lo guardas, y luego intentas pintar en cada columna según eso… Es demasiado complicado para algo que debería ser mucho más sencillo.
//No necesitas calcular nada antes según el ancho de pantalla.

El flujo debería ser:

//Hacer la petición.
//Recibir los datos.
Iterar sobre esos datos y pintarlos con una función que genera el HTML de cada carta.
Para eso, ya tienes CSS Grid que te organiza las columnas automáticamente según el tamaño de la pantalla.

!Recomendaciones
//Borra esa lógica compleja de columnas.
//Crea una función reutilizable que reciba los datos de una imagen y genere su HTML.
//Cuando tengas los datos, simplemente iteras y pintas con esa función.
//Seguro que cuando lo veas desde otra perspectiva lo vas a arreglar rápido. Esto te va a ayudar muchísimo para lo que viene en el curso.
//Mucho ánimo, te leemos pronto!

!Notas
La página no es responsive.
Estás cumpliendo bien con mostrar mensajes y gatitos cuando no hay resultados, pero el uso de alert no es buena práctica. Corta la ejecución y no se ve bien. Usa un modal o un mensaje en el DOM.
Al abrir la página, aparece este error:
initialError
initialError
608×125 3.24 KB
El primer fetch lanza 5 peticiones, algunas con queries diferentes como dog, man, person:
initalFetch
initalFetch
949×426 107 KB
//Si buscas algo como wood, también lanza peticiones extra (man, person) que no corresponden. Esto ocurre en las líneas 106 y 107. Revísalo.
Mejora la legibilidad del código, no tienes apenas saltos de línea, y eso hace muy tedioso seguir la lógica. Agrúpalo visualmente mejor.
//El archivo Card.js tiene 421 líneas con bucles complejos y lógica que no necesitas. No es escalable ni reutilizable.
!Puntos positivos
Usas bien los template literals en varias partes. Me sorprende que luego no los uses de forma más clara en Card.js…
La estructura general de carpetas y archivos está bien pensada, con componentes y sus estilos separados. Aun así, podrías dividir más: separar lógica de peticiones, pintado, etc.
!Mejoras opcionales
El font podría tener más personalidad, y podrías trabajar un poco más los detalles: outline en el focus, tamaños de íconos, etc… */
//? Quitar el modal del inicio

import './style.css';
import { createButton } from './src/components/button/button';
import { createCards } from './src/components/card/Card';
import { getImagesPerson } from './src/components/personInfo/personInfo';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
export { element1Src, element2Src, elementName1InnerText, elementName2InnerText };
//!Variables
let firstWord = 'nada de nada';
let imagesList = {}

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
<div class="notification" id="notification">¡Esto es una notificación!</div>
<div id="modal" class="modal" display="none">
    <div class="modal-content">
      <span id="closeModal" class="close">&times;</span>
      <h2>¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...</h2>
      <p>Muchas gracias.</p>
    </div>
  </div>
<div class="mainContainerCards2">
<div class="container1 containersList" id="div1"> </div>
</div> 
</main>`;

//! El modal
// Seleccionar elementos
//const openModal = document.getElementById('openModal');
//const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Abrir el modal
/* openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
}); */

// Cerrar el modal
/* closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
}); */

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



/* function showNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000); // Ocultar después de 3 segundos
}; */

//!Función traer información de la API
async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  if (imagesList.length === 0) {
    getImages('gatos');
    //showNotification()
    // Habilitamos el modal
    //const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';



    // Cerrar el modal al hacer clic fuera del contenido


    /*  confirm("¡Busqueda errónea!, por favor intentalo con palabras como gato, perro..."); */
    //getImagesPerson('man');
    //getImagesPerson('person');
  }
  else {
    modal.style.display = 'none';
    createCards(imagesList);    //getImagesPerson('man');
    //getImagesPerson('person');
  }
}
getImages('dog');

//!Leer palabra de busqueda
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
