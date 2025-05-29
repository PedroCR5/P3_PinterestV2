import "./Button.css";
//! Crear botones
export const createButton = ({
  texto = "Pon aquí tu texto",
  size = "m",
  bgColor,
  bgImage = `/assets/pinterest_logo.png`,
  classInfo = "",

}) => {
  return `<button class=" ${size} ${classInfo}" style="background-color: ${bgColor}" style="background-image: url(${bgImage})">${texto}</button>`
}