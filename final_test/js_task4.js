loadData(); 

async function loadData() {
    const data = await getData();
    createTable(data);
}

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let jsonData = data.json();
    
    return jsonData;
}


function createTable(data) {
    console.log(data);
    let table = document.createElement('table');
    let header = getTableHeader();
    let body = getTableBody(data);
    table.appendChild(header);
    table.appendChild(body);
    document.body.appendChild(table);
}

function getTableHeader() {
    let header = document.createElement('thead');
    header.innerHTML = `
        <tr>
            <th>#</th>
            <th>userName</th>
            <th>email</th>
            <th>Показать webiste</th>
            <th>phone</th>
        </tr>
    `;

    return header;
}

function getTableBody(data) {
    let tBody = document.createElement('tbody');
    data.forEach((item, ind) => {
        let newRow = document.createElement('tr');
        let td1 = getNewCell(ind);
        let td2 = getNewCell(item.name);
        let td3 = getNewCell(item.email);
        let td4 = getCellWithButton(item.website);
        let td5 = getNewCell(item.phone);
        newRow.appendChild(td1);
        newRow.appendChild(td2);
        newRow.appendChild(td3);
        newRow.appendChild(td4);
        newRow.appendChild(td5);
        tBody.appendChild(newRow);
    });
    return tBody;
}

function getNewCell(content) {
    let cell = document.createElement('td');
    cell.innerText = content;
    return cell;
}

function getCellWithButton(text) {
    let cell = getNewCell('');
    let btn = document.createElement('button');
    btn.innerText = 'Show/Hide';
    btn.addEventListener('click', togleShowWebsite);

    let span = document.createElement('span');
    span.innerText = text;
    span.className = 'hide';
    
    cell.appendChild(btn);
    cell.appendChild(span);
    return cell;
}

function togleShowWebsite(e) {
    e.target.classList.toggle('show');
}