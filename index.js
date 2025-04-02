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
    // куда монтировать рулетку
    el_parent = document.getElementById('mysite-roulette-container'),
    roulette; // Объявляем переменную roulette, но не инициализируем её

  // Добавляем обработчик событий для кнопки "Open"
  document.getElementById('restart-roulette').addEventListener('click', function() {
    // Воспроизводим звук
    var audio = new Audio('sound.mp3'); // Замените sound.mp3 на путь к вашему звуковому файлу
    audio.play();

    // Удаляем старую рулетку (если она есть)
    el_parent.innerHTML = '';
    // Создаем новую рулетку
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
    // Запускаем новую рулетку
    roulette.start();
  });
}

document.addEventListener('DOMContentLoaded', main);
