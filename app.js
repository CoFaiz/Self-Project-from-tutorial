// Scriptnya gk berfungsi broo, karena link icon gk bisa diakses
const hamburgerButton = document.getElementById('hamburger')
const navlsit = document.getElementById('nav-list')

function toggleButton() {
    navlsit.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)