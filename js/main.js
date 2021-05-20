let list = document.getElementById('list');
const titulo = document.getElementById('titulo');
const h1 = createElements('h1', "to do list", 'titulo');


function addItem() {
    let input = document.getElementById('inputValue').value;
    if (input.length != 0) createElements('li', input, 'list', input);
};


function enterEvent(e) {
    if (e.code == 'Enter' ){
        addItem();
    }
}


function erase(e){
    const evento = e.target.textContent;
    let toErase = document.getElementById(evento);
    if (toErase){
        toErase.remove();
    }
    
}

function createElements(type, content, parentId, id) {
    const parent = document.getElementById(parentId);
    const task = document.createElement(type);
    const taskName = document.createTextNode(content);
    task.setAttribute('id', id)
    task.appendChild(taskName);
    parent.appendChild(task);
}