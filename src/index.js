import './styles.scss'

const burgerBtn = document.getElementById('btn')
const menu = document.querySelector('.navigation__menu')
const modal = document.getElementById('modal')

document.addEventListener('click', (e) => {
  if (e.target.className === 'button-primary') {
    modal.style.display = 'block'
    return
  } else if (e.target === modal || e.target.id === 'modal-close') {
    modal.style.display = 'none'
    return
  } else if (e.target.closest('#btn')) {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    return
  }
})
