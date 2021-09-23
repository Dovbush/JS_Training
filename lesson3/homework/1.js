var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
var currentPosition = 0;
var totalSlides = 7;

window.addEventListener('load', function() {
  initEvents();
  renderImage();
})

function initEvents() {
  let nextBtn = document.getElementById('NextSilde');
  nextBtn.addEventListener('click', nextSlide);

  let prevBtn = document.getElementById('PrevSilde');
  prevBtn.addEventListener('click', prevSlide);
}

function renderImage() {
  // remove previous slide;
  removeSlide();
  // create new slide;
  let img = document.createElement('img');
  img.id = 'slideImg';
  img.src = OurSliderImages[currentPosition];
  img.href = 'test';

  let slider = document.getElementById('slider');
  // console.dir('slider', slider);
  slider.appendChild(img);
  console.log('current slider:', currentPosition + 1);
}

function removeSlide() {
  let slide = document.getElementById('slideImg');
  if (slide) {
    slide.remove();
  }
}

function nextSlide() {
  currentPosition = currentPosition === OurSliderImages.length - 1 ? 0 : currentPosition + 1;
  renderImage();
}

function prevSlide() {
  currentPosition = currentPosition === 0 ? OurSliderImages.length - 1 : currentPosition - 1;
  renderImage();
}


/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/


