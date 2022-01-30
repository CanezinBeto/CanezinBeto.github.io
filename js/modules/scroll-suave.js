export default function initScrollSuave() {
  const itensMenu = document.querySelectorAll('[data-js="suave"] a[href^="#"]')

  const scrollToSection = (event) => {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  itensMenu.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
