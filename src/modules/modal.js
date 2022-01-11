const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalClose = modal.querySelector('.popup-close');

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

  modalClose.addEventListener('click', () => {
    count = 0;
    modal.style.display = '';
    modal.style.opacity = '';
  });
};

export default modal;
