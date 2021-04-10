// Selectors

const body = document.querySelector('body');

const todoInput = document.querySelector('.todo-input');
const btnTheme = document.querySelector('.change-theme');
const todoListContainer = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');
const allBtnCheck = document.querySelectorAll('.check-btn');
const allBtnDelete = document.querySelectorAll('.delete-btn');
const filterBtns = document.querySelectorAll('.todo-filter');



// Event Listeners

document.addEventListener('DOMContentLoaded', getTodos);
// Create list with the value typed in the input field
todoInput.addEventListener('keyup', (e) => {
  e.preventDefault();

  let inputValue = todoInput.value;
  

  if ( e.key === 'Enter' && inputValue.trim().length >= 1 ) {
    createTodo(inputValue);

    countAllTodos();

  }

})

btnTheme.addEventListener('click', changeTheme);

filterBtns.forEach((filter) => {
  filter.addEventListener('click', filterTodo);
})

clearBtn.addEventListener('click', clearCompleted);






// functions

// Function that changes the theme (dark vs. light)
function changeTheme() {
  
  if (body.classList[0] === 'dark') {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
}

// Create the DOM of todo 
function createTodo(text) {

  const todoListItem = document.createElement('div');
  todoListItem.className = 'todo-list-item active';

  const checkBtn = document.createElement('div')
  checkBtn.className = 'check-btn';
  checkBtn.addEventListener('click', checkToCompleted)

  const checkImg = document.createElement('img')
  checkImg.src = './images/icon-check.svg';
  checkImg.alt = 'Check Icon';

  checkBtn.appendChild(checkImg)

  const todoText = document.createElement('p')
  todoText.className = 'todo-text';
  todoText.innerHTML = text;

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', deleteTodo)

  const deleteImg = document.createElement('img')
  deleteImg.src = './images/icon-cross.svg';
  deleteImg.alt = 'Delete Button';

  deleteBtn.appendChild(deleteImg);

  todoListItem.append(checkBtn, todoText, deleteBtn);
  todoListContainer.appendChild(todoListItem);

  // save to Local Storage
  saveToLS(todoInput.value);

  // clear todo input value
  todoInput.value= '';
  
  
}

// delete todo list items

function deleteTodo(e) {
  const item = e.target;
  // delete todo
  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    removeLS(todo);
    todo.remove();
  }

}

// check completed task by clicking the checkmark

function checkToCompleted(e) {
  const item = e.target;

  if(item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    todo.classList.toggle('active');
  }
}

// Count todo list items
function countAllTodos() {
  const allActive = document.querySelectorAll('.todo-list-item');
  const allItemsCount = document.querySelector('.all-items-count');

  allItemsCount.innerText = allActive.length;

}

// Remove all completed todos
function clearCompleted() {
  const allCompleted = document.querySelectorAll('.todo-list-item.completed');

  for (todo of allCompleted) {
    todo.remove()
  }
  }


// filter todo items - completed, all, active
function filterTodo(e) {
  const todos = todoListContainer.querySelectorAll('.todo-list-item');

  todos.forEach(todo => {
    switch(e.target.innerText) {
      case "All": 
        todo.style.display = 'flex';
        break;
      case "Completed":
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case "Active": 
        if(!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  })
}

// Save to local storage
function saveToLS(todo) {
  // CHECK: Hey do I already have thing in there?
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Get todos from LS
function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(todo => {
    const todoListItem = document.createElement('div');
    todoListItem.className = 'todo-list-item active';
  
    const checkBtn = document.createElement('div')
    checkBtn.className = 'check-btn';
    checkBtn.addEventListener('click', checkToCompleted)
  
    const checkImg = document.createElement('img')
    checkImg.src = './images/icon-check.svg';
    checkImg.alt = 'Check Icon';
  
    checkBtn.appendChild(checkImg)
  
    const todoText = document.createElement('p')
    todoText.className = 'todo-text';
    todoText.innerHTML = todo;
  
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', deleteTodo)
  
    const deleteImg = document.createElement('img')
    deleteImg.src = './images/icon-cross.svg';
    deleteImg.alt = 'Delete Button';
  
    deleteBtn.appendChild(deleteImg);
  
    todoListItem.append(checkBtn, todoText, deleteBtn);
    todoListContainer.appendChild(todoListItem);
  })
}

// remove todos from LS
function removeLS(todo) {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[1].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
