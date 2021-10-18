window.onload = () => {
  let url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then( res => res.json())
    .then((res) => res[getRandomIntInclusive(0, 9)])
    .then((person) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => {
          let finalUser = {};
          finalUser.name = person.name;
          finalUser.posts = posts.filter((post) => {
            return person.id == post.userId;
          })
          console.log(finalUser);
        })
    })
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Задача:

  1. При помощи fetch получить данные:
     https://jsonplaceholder.typicode.com/users

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка постов человека
     https://jsonplaceholder.typicode.com/posts
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и пости которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
