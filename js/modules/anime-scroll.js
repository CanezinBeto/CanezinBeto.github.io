export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const maxHeight = window.innerHeight * 0.6
  sections[0].classList.add('ativo')

  const animeScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = sectionTop - maxHeight < 0
      if (isSectionVisible) section.classList.add('ativo')
      else if (section.classList.contains('ativo'))
        section.classList.remove('ativo')
    })
  }

  if (window.innerWidth < 600) {
    sections[1].classList.add('ativo')
  }

  window.addEventListener('scroll', animeScroll)
}
