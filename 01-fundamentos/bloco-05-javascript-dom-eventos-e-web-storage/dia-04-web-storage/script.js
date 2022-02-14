// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).

let body = document.querySelector('body');
let main = document.querySelector('main');

// Cor de fundo da tela;
// Cor do texto;

//Color picker
let rgb = document.querySelectorAll('.rgb')
let color = document.querySelector('.color')
let defaultColor = 255

for (let k in rgb) {
  rgb[k].value = defaultColor;
}

function setColor() {
  let bgRgb = `rgb(${getColor()[0]}, ${getColor()[1]}, ${getColor()[2]})`;
  color.style.backgroundColor = bgRgb;
  return bgRgb;
}

function getColor() {
  let colors = [];
  for (let i = 0; i < rgb.length; i += 1) {
    colors.push(rgb[i].value)
  }
  return colors
}
document.addEventListener('keyup', setColor)

// Color changer
let btnBgChanger = document.querySelectorAll('#bgcolor')[0];
let btnFontChanger = document.querySelectorAll('#fontcolor')[0];

function changeBgColor() {
  body.style.backgroundColor = setColor();
}
btnBgChanger.addEventListener('click', changeBgColor)

function changeFontColor() {
  body.style.color = setColor();
}
btnFontChanger.addEventListener('click', changeFontColor)

// Tamanho da fonte;
let input = document.querySelector('#slider');
let p = document.getElementsByTagName('p');

function setFontSize() {
  for (let k of p) {
    k.style.fontSize = `${input.value}px`
  }
}
input.addEventListener('mouseup', setFontSize)
