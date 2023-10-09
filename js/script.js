var itemsArray = [];

function addTodo() {
    var item = document.getElementById('inlineFormInputName2').value;
    var list = document.getElementById('listmain');

    var listItem = document.createElement("li");
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    var btnDelete = document.createElement("button");
    btnDelete.type = 'button';
    btnDelete.className = 'btn btn-primary btn-sm';
    btnDelete.onclick = function() {
        deleteTodo(listItem);
    };

    listItem.innerText = item;
    btnDelete.innerText = "Delete";

    var btnGroup = document.createElement("div");
    btnGroup.className = 'btn-group';
    btnGroup.appendChild(btnDelete);
    listItem.appendChild(btnGroup);

    list.appendChild(listItem);

    itemsArray.push(item);
}

function deleteTodo(listItem) {
    var list = document.getElementById('listmain');
    list.removeChild(listItem);
}
