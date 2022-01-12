const tabs = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  tabPanel.addEventListener('click', (event) => {
    if (event.target.closest('.service-header-tab')) {
      const tabBtn = event.target.closest('.service-header-tab');

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      });
    }
  });
};

export default tabs;
