//import { windowWidth } from "../../../main";
import { createButton } from "../button/button";
import { element1Src, element2Src, elementName1InnerText, elementName2InnerText } from "../../../main";
import "./card.css";

//! Color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
//! Función crear cartas
export function createCards(imagesList) {
  const divMainContainer1 = document.querySelector("#div1");
  divMainContainer1.innerHTML = ``;
  for (let i = 0; i < imagesList.length; i++) {
    let imgParaUsar = imagesList[i].urls.thumb;
    const randomColorImg = getRandomColor();
    divMainContainer1.innerHTML +=
      `<div class="cardDiv">
          <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); ">
            <img class="imgImageDiv${i}" />
            <div class="initialIconsBox">
                    ${createButton({ texto: "+53", size: "s", classInfo: `camera off on${i}` })}
              <div class="visitsBox">
                ${createButton({ texto: "Visitar", size: "l", classInfo: `visitar off center on${i}` })}
              </div>
              ${createButton({ texto: `${imagesList[i].likes}`, size: "s", classInfo: `heart off on${i}` })}
            </div>
          </div>  
          <div class="cardBottomPart">
            <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" style="border-color: ${randomColorImg}"/>
            <p class="cardPUser${i} name"> </p>
            <img src="./assets/upImage.png" class="upImg" />
            <p class="cardPDate${i} date"> </p>
          </div>
        </div>`;
    const cardPUser = document.querySelector(`.cardPUser${i}`)
    const cardPDate = document.querySelector(`.cardPDate${i}`)
    cardPUser.innerText = imagesList[i].user.name;
    let dateCreated = imagesList[i].created_at;
    let day = dateCreated.substring(8, 10);
    let month = dateCreated.substring(5, 7);
    let year = dateCreated.substring(0, 4);
    cardPDate.innerText = `${day}/${month}/${year}`;
    const imgButtonHeart = document.querySelector(`.heart`);
    imgButtonHeart.innerHTML = `<img class="imgHeart" src="./assets/heart.png" alt="pinterest">
          <span class="likesHeart">${imagesList[i].likes}</span>`
    const imgButtonCamera = document.querySelector(`.camera`);
    imgButtonCamera.innerHTML = `<img class="imgCamera" src="./assets/camera.png" alt="pinterest">
          <span class="likesHeart">+53</span>`
  }
  for (let k = 0; k < 4; k++) {
    const element1 = document.getElementById(`miImagenCanvas${k}`);
    element1.src = element1Src;
    const elementName1 = document.querySelector(`.cardPUser${k}`);
    elementName1.innerText = elementName1InnerText;
  }
  for (let k = 4; k < 10; k++) {
    const element2 = document.getElementById(`miImagenCanvas${k}`);
    element2.src = element2Src;
    const elementName2 = document.querySelector(`.cardPUser${k}`);
    elementName2.innerText = elementName2InnerText;
  }
}