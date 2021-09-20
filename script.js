const navMenu = document.querySelector('.nav_menu')
const headerBurger = document.querySelector('.header_burger')

const openBurger = () => {
  navMenu.classList.toggle('open-burger')
}

headerBurger.addEventListener('click', openBurger)