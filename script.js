const body = document.querySelector('body')


const btnTheme = document.querySelector('.change-theme')
const allBtnCheck = document.querySelectorAll('.check-button')
const allBtnRemove = document.querySelectorAll('.delete-todo')

const ordersBtns = document.querySelectorAll('.todo-list-filter')


// Function that changes the theme (dark vs. light)
const changeTheme = () => {

  if (body.classList[0] === 'dark') {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.className = '';
    body.classList.add('dark');
  }
}

// Event that changes the theme
btnTheme.addEventListener('click', changeTheme);