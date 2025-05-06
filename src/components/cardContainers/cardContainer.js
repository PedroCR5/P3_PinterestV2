import { numberOfColumns } from "../../../main";
let numberOfColumnsHere = 5;
export function createColumns() {
  console.log(numberOfColumns);
  const divMainContainer = document.querySelector(".mainContainerCards2");
  for (let i = 0; i < numberOfColumnsHere; i++) {
    divMainContainer.innerHTML += `<div class="container${i + 1} containersList" id=div${i + 1} </div>`
  }
}