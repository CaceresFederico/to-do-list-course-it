let list = document.getElementById('list');
const titulo = document.getElementById('titulo');
const h1 = createElements('h1', "to do list", 'titulo');

function addItem() { //Generando el elemento con createElement
    let input = document.getElementById('inputValue').value;
    if (input.length != 0) createElements('li', input, 'list', input);
};

function enterEvent(e) { //Captura el Enter
    if (e.code == 'Enter' ) addItem();
}

function erase(e){ //Remueve matcheando el e.target.textContext con el id de cada li que incluimos en la funcion createELements
    let toErase = document.getElementById(e.target.textContent);
    if (toErase)toErase.remove();
}

function createElements(type, content, parentId, id) { //Función reutilizable utilizada para generar los elementos y renderizarlos
    const parent = document.getElementById(parentId);
    const task = document.createElement(type);
    const taskName = document.createTextNode(content);
    task.setAttribute('id', id);
    task.appendChild(taskName);
    parent.appendChild(task);
}