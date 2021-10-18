/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showColor(a, b, c){
  var arrOfArgs = Array.from(arguments); 
  arrOfArgs.forEach(function(arg){
    if (arg.length === 1) {
      arg = '0' + arg;
    }
  })

  colorText.innerText = '#' + a + b + c;
}

function setColor(){
  var rColor = getRandomIntInclusive(0, 255).toString(16);
  var gColor = getRandomIntInclusive(0, 255).toString(16);
  var bColor = getRandomIntInclusive(0, 255).toString(16);

  showColor(rColor, gColor, bColor);

  //document.body.style.background = 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')';
    var color = '#' + rColor + gColor + bColor;

  document.body.style.background = color;

  localStorage.setItem('color', color);
}

var colorText = document.getElementById('currentColor');
var btn = document.getElementById('btn');

btn.addEventListener('click', setColor);

// first variant
let col = localStorage.getItem('color');

if (col) {
    document.body.style.background = col;
    colorText.innerText = col;
}

// // second variant
// document.body.style.background = col ? col : '';
// colorText.innerText = col ? col : '';

// // third variant
// document.body.style.background = col ?? col;
// colorText.innerText = col ?? col;
