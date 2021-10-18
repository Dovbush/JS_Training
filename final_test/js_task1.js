window.onload = () => {
    let addBtn = document.getElementById('AddToDo');
    addBtn.addEventListener('click', addNewItem);
}

function addNewItem(e) {
    let list = document.getElementById('toDoList');
    let input = document.getElementById('newToDo');
    
    let newLi = document.createElement('li');
    newLi.className = 'listItem';
    
    let newSpan = document.createElement('span');
    newSpan.className = 'TodoText';
    newSpan.innerText = input.value;
    
    let newBtn = document.createElement('button');
    newBtn.innerText = 'Remove';
    newBtn.addEventListener('click', removeItem);

    input.value = '';
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    list.appendChild(newLi);
}

function removeItem(e) {
    e.target.parentElement.remove();
}