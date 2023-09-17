const cookiesBody = document.querySelector('[data-cookies]')

if (cookiesBody) {
  const buttonAccept = document.querySelector('[data-cookies="accept"]')
  const acceptClickHandler = () => {
    cookiesBody.classList.add('cookies--close')
  }

  buttonAccept.addEventListener('click', acceptClickHandler)
}