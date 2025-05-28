import "./Button.css";
//! Crear botones
export const createButton = ({
  texto = "Pon aquí tu texto",
  size = "m",
  bgColor,
  bgImage = `/assets/pinterest_logo.png`,
  classInfo = "",
  onclick = "",
}) => {
  return `<button class="buttonInfo1 ${size} ${classInfo}" style="background-color: ${bgColor}" style="onclick=${onclick}" style="background-image: url(${bgImage})">${texto}</button>`
}