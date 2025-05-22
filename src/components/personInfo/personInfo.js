import { accesKey, endPoint } from "../../../main";

//! Traer información de personas para cartas
export async function getImagesPerson(queryPerson) {
  let response = await fetch(endPoint + '?query=' + queryPerson + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesListP = await jsonResponse.results;
  if (queryPerson === 'person') {
    let firstPerson = imagesListP;
    return firstPerson;
  }
  else {
    let secondPerson = imagesListP;
    return secondPerson;
  }
}