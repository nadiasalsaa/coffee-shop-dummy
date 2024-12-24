// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav')
// ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active')
  e.preventDefault()
}
// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')
document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active')
  searchBox.focus()
  e.preventDefault()
}
// Klik di luar element
const hm = document.querySelector('#hamburger-menu')
const sb = document.querySelector('#search-btn')
document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
})

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#shopping-cart-btn').onclick = (e) => {
  shoppingCart.classList.toggle('active')
  e.preventDefault()
}
// klik di luar element
const scb = document.querySelector('#shopping-cart-btn')
const hb = document.querySelector('#hamburger-menu')
const sbb = document.querySelector('#search-btn')
document.addEventListener('click', function (e) {
  if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
  if (!sbb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active')
  }
})

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex'
    e.preventDefault()
  }
})
// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none'
  e.preventDefault()
}
// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none'
  }
}
