import { animate } from './helpers';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let screenWidth = 768;
  let scrollWidth = 17;
  let widthAnimation = screenWidth - scrollWidth;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      if (document.documentElement.clientWidth >= widthAnimation) {
        animate({
          duration: 200,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
      }
    });
  });

  modal.addEventListener('click', (event) => {
    if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {
      modal.style.display = '';
    }
  });
};

export default modal;
