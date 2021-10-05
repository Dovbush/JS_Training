/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let train = {};
    train.name = 'Express';
    train.speed = 120;
    train.numOfPassengers = 100;
    train.go = function() {
        console.log(`Поезд ${this.name} везет ${this.numOfPassengers} со скоростью ${this.speed}`);
    }
    train.stop = function() {
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
    }
    train.pickUp = function(x) {
        this.numOfPassengers += x;
        console.log(`${this.numOfPassengers}`);
    }

