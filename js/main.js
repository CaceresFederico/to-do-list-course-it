const h1 = createElements('h1', "to do list", 'titulo');

//Generando el elemento con createElement
function addItem() { 
    let input = document.getElementById('inputValue').value;
    input.length != 0 ? createElements('li', input, 'list', input): alert("input vacío")
    document.getElementById('inputValue').value = ''
};

//Captura el Enter pasando el evento como parámetro
function enterEvent(e) { if (e.code == 'Enter' ) addItem();}

//Remueve matcheando el e.target.textContext con el id de cada li que incluimos en la funcion createELements();
function erase(e){ 
    let toErase = document.getElementById(e.target.textContent);
    if (toErase) toErase.remove();
}

//Función reutilizable utilizada para generar los elementos y renderizarlos
function createElements(type, content, parentId, id) { 
    const parent = document.getElementById(parentId);
    const task = document.createElement(type);
    const taskName = document.createTextNode(content);
    task.setAttribute('id', id);
    task.appendChild(taskName);
    parent.appendChild(task);
}