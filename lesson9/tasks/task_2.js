/*

    Задание 2:
    Написать форму логина (логин(username) пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", 
    если нет - вывести alert({userName} был добавлен), форма логина остается

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678
*/

let users = [];

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;

        users.push(this);
    }
}

let submitBtn = document.getElementById('btn');
let formTask2 = document.getElementById('task2');

const submitFrom = (e) => {
    e.preventDefault();    
    let savedUsers = JSON.parse(localStorage.getItem('users'));

    if (savedUsers) {
        users = [...savedUsers];
    }

    // провереям есть ли newUser в массиве users
    let newUser = new User(formTask2.username.value, formTask2.password.value);

    let existingUser = savedUsers.find(u => u.name === newUser.name);

    if (existingUser) {
        document.body.innerHTML = `
            <div>
                Привет ${ existingUser.name }
                <button>logout</button>
            </div>
        `
    } else {
        alert(`${ newUser.name } был создан!`);
    }


    localStorage.setItem('users', JSON.stringify(users));

    formTask2.reset();
}

// solid 

submitBtn.addEventListener('click', submitFrom);


// second variant to put it out of function
// let savedUsers = localStorage.getItem('users');

// if (savedUsers) {
//     users = JSON.parse(savedUsers);
// }
