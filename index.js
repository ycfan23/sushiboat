const menuBtn = document.querySelector('.menuBtn');
const navList = document.querySelector('.nav-list');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    navList.classList.add('open');
    menuOpen = true;
  } else {
    navList.classList.remove('open');
    menuOpen = false;
  }
})