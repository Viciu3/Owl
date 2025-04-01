const moonLogo = document.getElementById('moon-logo');
const meteorShower = document.getElementById('meteor-shower');
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const meteor = document.querySelector('.meteor'); // Получаем элемент метеора

let isMeteorShowerVisible = false;
let isMenuVisible = false;

moonLogo.addEventListener('click', () => {
  if (isMeteorShowerVisible) {
    meteorShower.style.display = 'none';
    isMeteorShowerVisible = false;
  } else {
    meteorShower.style.display = 'block';
    isMeteorShowerVisible = true;
  }
});

menuIcon.addEventListener('click', () => {
  if (isMenuVisible) {
    menu.classList.remove('show');
    isMenuVisible = false;
  } else {
    menu.classList.add('show');
    isMenuVisible = true;
  }
});
