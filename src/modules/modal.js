const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let screenWidth = 768;
  let scrollWidth = 17;
  let widthAnimation = screenWidth - scrollWidth;

  let count = 0;
  let idInterval;

  const openAnimation = () => {
    count += 0.03;
    idInterval = requestAnimationFrame(openAnimation);

    modal.style.display = 'block';
    if (count <= 1) {
      modal.style.opacity = count;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (document.documentElement.clientWidth >= widthAnimation) {
        openAnimation();
      }
    });
  });

  modal.addEventListener('click', (event) => {
    if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {
      count = 0;
      modal.style.display = '';
    }
  });
};

export default modal;
