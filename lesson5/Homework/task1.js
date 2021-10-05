function Comment(name, message, url) {
  this.name = name;
  this.message = message;
  this.url = url;
  this.likes = 0;
}

const CommentProto = {
  urlProto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FsimpleJavascript%2F&psig=AOvVaw0nql2MsBfWa2wqAh9yExds&ust=1633267699270000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj3oMDqq_MCFQAAAAAdAAAAABAQ',
  increaseLikes: function(num) {
    this.likes += num;
  }
};

let feed = new Comment('Test', 'message', 'wwww.google.com' );
Object.setPrototypeOf(feed, CommentProto);
feed.increaseLikes(20);
console.info('Likes: ', feed.likes);

var comments = [
                new Comment('Test 1', 'This is my comment...', 'www.google.com'),
                new Comment('Test 2', 'Another comment...', 'www.yahoo.com'),
                new Comment('Test 3', 'One more comment...', 'www.ukr.net'),
                new Comment('Test 4', 'Final comment...', 'www.google.com')
               ];

function ProcessComments(listComments) {
  this.comments = listComments;
  this.displayAll = function() {
    this.comments.forEach(element => {
      let divElem = document.createElement('div');
      divElem.id = 'CommentsFeed';
      divElem.innerText = element.message;
      document.body.appendChild(divElem);
    });
  }
}
/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Создать функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/