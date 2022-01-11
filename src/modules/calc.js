const calc = () => {
  const calcInputs = document.querySelectorAll('input.calc-item');

  calcInputs.forEach((calcInput) => {
    calcInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/, '');
    });
  });
};

export default calc;
