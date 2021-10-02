/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

// let dog = {
//   name: '',
//   breed: '',
//   status: 'idle',

//   changeStatus: function(){...},
//   showProps: function(){...}
// };

function Dog(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;
  this.feed = function() {
    console.log(`${this.name} is eating...`);
  };
  this.showProps = function() {
    for (key in this) {
      console.log(key, this[key]);
    }
  }
}

// const props = () => console.log(`${this.name} is eating...`);

let dog1 = new Dog('Tom', 'white', 'running');
console.log(dog1);


