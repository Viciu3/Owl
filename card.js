function centerCard() {
  const meContent = document.getElementById('me-content');
  const card = meContent.querySelector('.card');

  // Получаем размеры окна браузера
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Получаем размеры карточки
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  // Рассчитываем отступы, чтобы центрировать карточку
  const marginTop = Math.max(0, (windowHeight - cardHeight) / 2);
  const marginLeft = Math.max(0, (windowWidth - cardWidth) / 2);

  // Применяем отступы к контейнеру карточки
  meContent.style.marginTop = marginTop + 'px';
  meContent.style.marginLeft = marginLeft + 'px';
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', centerCard);
window.addEventListener('resize', centerCard);
