// Selectors

const body = document.querySelector('body')

const todoInput = document.querySelector('.todo-input')
const btnTheme = document.querySelector('.change-theme')
const todoListContainer = document.querySelector('.todo-list-container')
const allBtnCheck = document.querySelectorAll('.check-btn')
const allBtnDelete = document.querySelectorAll('.delete-btn')


const filterBtns = document.querySelectorAll('.todo-list-filter')




// Function that changes the theme (dark vs. light)
const changeTheme = () => {
  
  if (body.classList[0] === 'dark') {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
}




// Create the DOM of todo 
const createTodo = (text) => {
  console.log('hello')
  const todoListItem = document.createElement('div')
  todoListItem.className = 'todo-list-item active'

  const checkBtn = document.createElement('div')
  checkBtn.className = 'check-btn'
  // checkBtn.addEventListener('click', checkToCompleted)

  const checkImg = document.createElement('img')
  checkImg.src = './images/icon-check.svg'
  checkImg.alt = 'Check Icon'

  checkBtn.appendChild(checkImg)

  const todoText = document.createElement('p')
  todoText.className = 'todo-text'
  todoText.textContent = text

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete-btn'
  // deleteBtn.addEventListener('click', deleteTodo)

  const deleteImg = document.createElement('img')
  deleteImg.src = './images/icon-cross.svg'
  deleteImg.alt = 'Delete Button'

  deleteBtn.appendChild(deleteImg)

  todoListItem.append(checkBtn, todoText, deleteBtn)

  todoListContainer.appendChild(todoListItem)

}


// Event Listeners

todoInput.addEventListener('keyup', (e) => {
  e.preventDefault();

  const inputValue = createTodo.childNodes[3];
  const inputText = inputValue.value;

  if ( e.key === 'Enter' && inputText.trim().length >= 1 ) {
    createTodo(inputText);
    inputText = '';
  }
})

//// Event that changes the theme
btnTheme.addEventListener('click', changeTheme);