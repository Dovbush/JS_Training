/*

    Задание 3:

    Написать форму с 2 полями для title и about
    при сабмите формы должен создаватся пост на основе класа Post
    <form >     
        <input type="text" name="title">
        <textarea name="about"></textarea>
        <button>Send</button>
    </form>

    Написать класс Post в котором есть данные:

    _id    
    title,
    body,
    likes

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: https://jsonplaceholder.typicode.com/posts

*/let firstPost = new postMessage()