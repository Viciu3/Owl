// ЗАМЕТКА ПРО ОРУЖИЕ
// -----------------------------------------------------------------------------

// оружие -- это не константы и не просто глобальные переменные. очевидно,
// список оружия для массовки и оружие-приз должны прилетать с бекенда.

// вопрос: что такое ATTRS?
//  ответ: это атрибуты для создания объектов класса EvWeapon. внутри моего кода
//         используется класс EvWeapon, но тебе в нём разбираться не нужно. всё,
//         что нужно, -- это подсунуть правильные переменные WEAPON_PRIZE_ATTRS
//         и WEAPON_ACTORS_ATTRS

// WEAPON_PRIZE_ATTRS  <-- один набор атрибутов для оружия-приза
// WEAPON_ACTORS_ATTRS <-- массив атрибутов для оружия-актёров

// обязательные поля в атрибутах:
//     - weapon_name (строка)
//     - skin_name   (строка)
//     - rarity      (один из вариантов: 'milspec', 'restricted', 'classified',
//                                       'covert',  'rare',       'uncommon')
//     - steam_image (ссылка на картинку)

var
  WEAPON_PRIZE_ATTRS = {
    weapon_name: 'MP9',
    skin_name:   'Сектор приз на барабане',
    rarity:      'milspec',
    steam_image: 'MP9.png'
  },
  WEAPON_ACTORS_ATTRS = [
    {
      weapon_name: 'FAMAS',
      skin_name:   'Валентность',
      rarity:      'restricted',
      steam_image: 'FAMAS.png'
    },
    {
      weapon_name: 'Desert Eagle',
      skin_name:   'Дракон-предводитель',
      rarity:      'classified',
      steam_image: 'Desert_Eagle.png'
    },
    {
      weapon_name: 'M4A4',
      skin_name:   'Звездный крейсер',
      rarity:      'covert',
      steam_image: 'M4A4.png'
    },
    {
      weapon_name: '★ Bowie Knife',
      skin_name:   'Убийство',
      rarity:      'rare',
      steam_image: 'Bowie_Knife.png'
    }
  ];

// ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ЗДЕСЬ НАЧИНАЕТСЯ ВСЯ ДВИЖУХА
// -----------------------------------------------------------------------------

function main() {
  var
    el_parent = document.getElementById('mysite-roulette-container'),
    restartButton = document.getElementById('restart-roulette'),
    hideButton = document.getElementById('hide-roulette'),
    videoBackground = document.getElementById('background-video'),
    meContent = document.getElementById('me-content'),
    roulette;

  if (restartButton) {
    restartButton.addEventListener('click', function() {
      var audio = new Audio('sound.mp3');
      audio.play();

      el_parent.innerHTML = '';
      roulette = new EvRoulette({
        weapon_prize_attrs:  WEAPON_PRIZE_ATTRS,
        weapon_actors_attrs: WEAPON_ACTORS_ATTRS,
        el_parent:           el_parent,
        beforeparty:         function () {
          console.log('Поехали!');
        },
        afterparty:          function () {
          console.log('Ой, всё');
        }
      });
      roulette.start();
    });
  }

  if (hideButton) {
    hideButton.addEventListener('click', function() {
      if (el_parent.style.display === 'none' || el_parent.style.display === '') {
        el_parent.style.display = 'block';
      } else {
        el_parent.style.display = 'none';
      }
    });
  }

  // Обработка кликов по пунктам меню
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
      const page = this.getAttribute('data-page');
      if (page === 'home') {
        document.body.classList.add('home-page');
        document.body.style.backgroundColor = 'transparent';
        if (videoBackground) videoBackground.style.display = 'block';
        if (el_parent) el_parent.style.display = 'block';
        if (restartButton) restartButton.style.display = 'block';
        if (hideButton) hideButton.style.display = 'block';
        if (meContent) meContent.style.display = 'none';
      } else if (page === 'me') {
        document.body.classList.remove('home-page');
        document.body.style.backgroundColor = 'black';
        if (videoBackground) videoBackground.style.display = 'none';
        if (el_parent) el_parent.style.display = 'none';
        if (restartButton) restartButton.style.display = 'none';
        if (hideButton) hideButton.style.display = 'none';
        if (meContent) meContent.style.display = 'block';
      } else {
        document.body.classList.remove('home-page');
        document.body.style.backgroundColor = 'black';
        if (videoBackground) videoBackground.style.display = 'none';
        if (el_parent) el_parent.style.display = 'none';
        if (restartButton) restartButton.style.display = 'none';
        if (hideButton) hideButton.style.display = 'none';
        if (meContent) meContent.style.display = 'none';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', main);
