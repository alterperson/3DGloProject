const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsBlock = document.querySelector('.portfolio-dots');
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const createDots = () => {
    let dot;
    for (let i = 0; i < slides.length; i++) {
      dot = document.createElement('li');
      dot.classList.add('dot');
      dotsBlock.append(dot);
    }
  };

  createDots();

  const dots = document.querySelectorAll('.dot');
  dots[0].classList.add('dot-active');

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (event) => {
    event.preventDefault();

    if (!event.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (event.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (event.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (event.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (event.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (event) => {
      if (event.target.matches('.dot, .portfolio-btn')) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (event) => {
      if (event.target.matches('.dot, .portfolio-btn')) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
