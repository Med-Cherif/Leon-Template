const list = document.querySelector('.list')

const openMenu = () => {
    list.classList.add('active')
}

const closeMenu = () => {
    list.classList.remove('active')
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('active', window.scrollY > 0)
})