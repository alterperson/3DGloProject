const forms = (idForm) => {
  const form = document.getElementById(idForm);
  const formElements = form.querySelectorAll('input');

  const regTel = /\D+/gi;
  const regText = /[^а-я\-\s]/gi;
  const regEmail = /[^\w\@\-\.\!\~\*\'\"]/gi;

  formElements.forEach((input) => {
    input.addEventListener('input', (e) => {
      if (input.type == 'tel') {
        e.target.value = e.target.value.replace(regTel, '');
      }
      if (input.type == 'text' || input.placeholder == 'Ваше сообщение') {
        e.target.value = e.target.value.replace(regText, '');
      }
      if (input.type == 'email') {
        e.target.value = e.target.value.replace(regEmail, '');
      }
    });
  });
};

export default forms;
