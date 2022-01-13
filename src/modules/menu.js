const menu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = (event) => {
    if (event.target.className === 'close-btn') {
      event.preventDefault();
      menu.classList.toggle('active-menu');
    } else if (event.target.closest('.menu') || event.target.matches('menu > ul > li > a')) {
      menu.classList.toggle('active-menu');
    } else if (!event.target.closest('menu')) {
      menu.classList.remove('active-menu');
    }
  };

  document.body.addEventListener('click', handleMenu);
};

export default menu;
