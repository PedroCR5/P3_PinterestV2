import "./Button.css";
export const createButton = ({
  texto = "Pon aquí tu texto",
  size = "m",
  bgColor,
  bgImage = `/assets/pinterest_logo.png`,
  classInfo = "",
}) => {
  return `<button class="buttonInfo1 ${size} ${classInfo}" style="background-color: ${bgColor}" style="background-image: url(${bgImage})">${texto}</button>`
}