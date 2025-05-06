import { windowWidth, numberOfColumns } from "../../../main";
import { createButton } from "../button/button";
import "./card.css";
export function createCards(imagesList) {
  const divMainContainer1 = document.querySelector("#div1");
  const divMainContainer2 = document.querySelector("#div2");
  const divMainContainer3 = document.querySelector("#div3");
  const divMainContainer4 = document.querySelector("#div4");
  const divMainContainer5 = document.querySelector("#div5");
  divMainContainer1.innerHTML = ``;
  divMainContainer2.innerHTML = ``;
  divMainContainer3.innerHTML = ``;
  divMainContainer4.innerHTML = ``;
  divMainContainer5.innerHTML = ``;
  for (let i = 0; i < imagesList.length; i++) {
    let imgParaUsar = imagesList[i].urls.thumb;
    let heightImg = imagesList[i].height / 10;
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
    const randomColorImg = getRandomColor()
    if (numberOfColumns === 2) {
      if (i < imagesList.length / 2) {
        divMainContainer1.innerHTML +=
          `<div class="cardDiv">
              <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth}px">
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
      else {
        divMainContainer2.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth}px">
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
          </div>`
          ;
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
    }
    else if (numberOfColumns === 3) {
      if (i < (imagesList.length / 3) * 1) {
        divMainContainer1.innerHTML +=
          `<div class="cardDiv">
              <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 3 * 2}px">
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
        imgButtonHeart.innerHTML = `
              <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
              <span class="likesHeart">${imagesList[i].likes}</span>
              `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
              <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
              <span class="likesHeart">+53</span>
              `
      }
      else if (i < (imagesList.length / 3) * 2) {
        divMainContainer2.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 3 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
      else {
        divMainContainer5.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 3 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
    }
    else {
      if (i < (imagesList.length / 5) * 1) {
        divMainContainer1.innerHTML +=
          `<div class="cardDiv">
              <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 5 * 2}px">
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
        imgButtonHeart.innerHTML = `
              <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
              <span class="likesHeart">${imagesList[i].likes}</span>
              `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
              <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
              <span class="likesHeart">+53</span>
              `
      }
      else if (i < (imagesList.length / 5) * 2) {
        divMainContainer2.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 5 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
      else if (i < 6) {
        divMainContainer3.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 5 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
      else if (i < 8) {
        divMainContainer4.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 5 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
      else {
        divMainContainer5.innerHTML +=
          `<div class="cardDiv">
            <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth / 5 * 2}px">
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
          </div>`
          ;
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
        const imgButtonHeart = document.querySelector(`.heart`);
        imgButtonHeart.innerHTML = `
        <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
        <span class="likesHeart">${imagesList[i].likes}</span>
        `
        const imgButtonCamera = document.querySelector(`.camera`);
        imgButtonCamera.innerHTML = `
        <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
        <span class="likesHeart">+53</span>
        `
      }
    }
  }
}