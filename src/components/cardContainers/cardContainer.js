let numberOfColumnsHere = 1;
export function createColumns() {
  const divMainContainer = document.querySelector(".mainContainerCards2");
  for (let i = 0; i < numberOfColumnsHere; i++) {
    divMainContainer.innerHTML += `<div class="container${i + 1} containersList" id=div${i + 1} </div>`
  }
}