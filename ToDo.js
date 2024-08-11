// Initialize the todo list from localStorage or create an empty array
let todos = JSON.parse(localStorage.getItem("todo")) || [];

// Function to display the todo list and update the count
function displayTodos() {
    const todoList = document.getElementById('todo');
    todoList.innerHTML = "";
    
    todos.forEach((todoItem, index) => {
        todoList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoItem}</span>
            <div>
              <button type="button" onclick="editTodo(${index})" class="btn btn-secondary">Edit</button>
              <button type="button" onclick="deleteTodo(${index})" class="btn btn-danger">Delete</button>
            </div>
        </li>`;
    });

    // Update the count of todo items
    document.getElementById('itemCount').innerText = todos.length;
}

// Function to add a new todo item
document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    let descc = document.getElementById('desc').value;

    if(descc) {
        todos.push(descc);
        localStorage.setItem("todo", JSON.stringify(todos));
        displayTodos();
        document.getElementById('desc').value = "";
    }
});

// Function to delete a todo item
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    displayTodos();
}

// Function to edit a todo item
function editTodo(index) {
    let newDesc = prompt("Edit your item:", todos[index]);
    if (newDesc) {
        todos[index] = newDesc;
        localStorage.setItem("todo", JSON.stringify(todos));
        displayTodos();
    }
}

// Initial display of todos
displayTodos();
