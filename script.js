let menuOpen = false;
const middleNav = document.querySelector('.middle_nav');

function выполнитьДействие() {
  if (!menuOpen) {
    middleNav.style.transform = 'translateY(85px)';
    middleNav.style.opacity = '1';
    menuOpen = true;
  } else {
    middleNav.style.transform = 'translateY(-100px)';
    middleNav.style.opacity = '0';
    menuOpen = false;
  }
}

// Проверяем ширину экрана при загрузке страницы и изменении размера окна
window.addEventListener('load', adjustOpacityOnResize);
window.addEventListener('resize', adjustOpacityOnResize);

function adjustOpacityOnResize() {
  if (window.innerWidth > 600) {
    middleNav.style.opacity = '1';
    middleNav.style.transform = 'translateY(0px)';
  }
  else{
    middleNav.style.opacity = '0';
    middleNav.style.transform = 'translateY(-100px)';
  }
}
// wiejf'afewefjieffjkepwfjkp




const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;
const cardMargin = 90; // Маржа между карточками

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        slider.style.transform = `translateX(-${(cardWidth + cardMargin) * currentIndex}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${(cardWidth + cardMargin) * currentIndex}px)`;
    }
});

