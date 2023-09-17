// функция, которая добавляет класс с анимацей, когда элемент пересекается с экраном просмотра
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {

      // анимация fadeIn
      change.target.classList.add('animate-fade-show')
      console.log(change.target)
      observer.unobserve(change.target)
    }
  })
}

const options = {
  threshold: [0.1]
}
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('[data-animate]')

for (let elm of elements) {
  observer.observe(elm)
}

if (document.querySelector('#loginMehod')) {
  const selectLoginMehod = new ItcCustomSelect('#loginMehod')
}

if (document.querySelector('#firstAuthenticationMethod')) {
  const selectLoginMehod = new ItcCustomSelect('#firstAuthenticationMethod')
}

if (document.querySelector('#secondAuthenticationMethod')) {
  const selectLoginMehod = new ItcCustomSelect('#secondAuthenticationMethod')
}