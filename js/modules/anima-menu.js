export default function animaMenu() {
  const menuLi = document.querySelectorAll('[data-js="menu"] li')
  const classe = 'detail-menu'

  const handleMouseOver = (event) => {
    event.currentTarget.classList.add(classe)
  }

  const handleMouseOut = (event) => {
    event.currentTarget.classList.remove(classe)
  }

  if (menuLi.length) {
    if (window.innerWidth > 800) {
      menuLi.forEach((li) => {
        li.addEventListener('mouseover', handleMouseOver)
      })
    }
    menuLi.forEach((li) => {
      li.addEventListener('mouseout', handleMouseOut)
    })
  }
}
