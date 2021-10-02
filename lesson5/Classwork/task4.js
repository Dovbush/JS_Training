const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

window.onload = () => {
  let btnE = document.getElementById('encryptBtn');
  btnE.addEventListener('click', defaultEncrypt);

  let btnD = document.getElementById('decryptBtn');
  btnD.addEventListener('click', defaultDecrypt);
}

function defaultEncrypt(e) {
  e.preventDefault();
  let inp = document.getElementById('encryptor');
  encryptCesar(3, inp.value);
}

function defaultDecrypt(e) {
  e.preventDefault();
  let inp = document.getElementById('encryptor');
  decryptCesar(3, inp.value);
}

function encryptCesar(num, text) {
  let result = [];
  let splitText = Array.from(text.toUpperCase());
  let splitAlphabet = Array.from(alphabet);
  splitText.forEach((letter) => {
    let newInd = splitAlphabet.indexOf(letter) + num;
    newInd = newInd > splitAlphabet.length - 1 ? newInd - splitAlphabet.length : newInd;
    result.push(splitAlphabet[newInd]);
  })
  console.log('result:', result.join(''));
  let resultBlock = document.getElementById('output');
  resultBlock.innerText = result.join('');
}

function decryptCesar(num, text) {
  let result = [];
  let splitText = Array.from(text.toUpperCase());
  let splitAlphabet = Array.from(alphabet);
  splitText.forEach((letter) => {
    let newInd = splitAlphabet.indexOf(letter) - num;
    newInd = newInd < 0 ? splitAlphabet.length + newInd : newInd;
    result.push(splitAlphabet[newInd]);
  });
  console.log('result:', result.join(''));
  let resultBlock = document.getElementById('output');
  resultBlock.innerText = result.join('');
}

var encryptCesar1 = encryptCesar.bind(null, 1);
var encryptCesar2 = encryptCesar.bind(null, 2);
var encryptCesar3 = encryptCesar.bind(null, 3);
var encryptCesar4 = encryptCesar.bind(null, 4);
var encryptCesar5 = encryptCesar.bind(null, 5);

var decryptCesar1 = decryptCesar.bind(null, 1);
var decryptCesar2 = decryptCesar.bind(null, 2);
var decryptCesar3 = decryptCesar.bind(null, 3);
var decryptCesar4 = decryptCesar.bind(null, 4);
var decryptCesar5 = decryptCesar.bind(null, 5);

/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
