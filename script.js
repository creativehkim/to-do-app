// Selectors

const body = document.querySelector('body');

const todoInput = document.querySelector('.todo-input');
const btnTheme = document.querySelector('.change-theme');
const todoListContainer = document.querySelector('.todo-list');
const allBtnCheck = document.querySelectorAll('.check-btn');
const allBtnDelete = document.querySelectorAll('.delete-btn');


const filterBtns = document.querySelectorAll('.todo-filter');




// Event Listeners

// Create list with the value typed in the input field
todoInput.addEventListener('keyup', (e) => {
  e.preventDefault();

  let inputValue = todoInput.value;
  

  if ( e.key === 'Enter' && inputValue.trim().length >= 1 ) {
    createTodo(inputValue);

  }
})

btnTheme.addEventListener('click', changeTheme);
filterBtns.forEach((filter) => {
  filter.addEventListener('click', filterTodo);
})



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

  // clear todo input value
  todoInput.value= '';
}

// delete todo list items

function deleteTodo(e) {
  const item = e.target;
  // delete todo
  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

}

// check completed task by clicking the checkmark

function checkToCompleted(e) {
  const item = e.target;

  if(item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// filtering todo items
function filterTodo(e) {
  const todos = todolist.childNodes;
  console.log(todos);
}