const sendForm = ({ formId, someElem = [] }) => {
  const modal = document.querySelector('.popup');
  const form = document.getElementById(formId);
  const formElements = form.querySelectorAll('input');
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Успешно отправлено! Спасибо! ';

  const regName = /[^а-я\-\s]/gi;
  const regPhone = /[^\+\d\(\)\-]/g;
  const regMessage = /[^а-я\-\!\.\,\?\:\;\(\)\"\s]/gi;
  const regEmail = /[^\w\@\-\.\!\~\*\'\"]/gi;

  statusBlock.style.color = '#ffffff';

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.name === 'user_phone') {
        if (regPhone.test(input.value)) {
          success = false;
        }
      }

      if (input.name === 'user_name') {
        if (regName.test(input.value)) {
          success = false;
        }
      }

      if (input.name === 'user_message') {
        if (regMessage.test(input.value)) {
          success = false;
        }
      }

      if (input.name === 'user_email') {
        if (regEmail.test(input.value)) {
          success = false;
        }
      }
    });

    return success;
  };

  const requiredEmail = () => {
    formElements.forEach((input) => {
      if (input.name == 'user_email') {
        input.setAttribute('required', true);
      }
    });
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          if (formId === 'form1' || formId === 'form2') {
            setTimeout(() => {
              statusBlock.textContent = '';
            }, 3000);
          }

          if (formId === 'form3') {
            setTimeout(() => {
              modal.style.display = 'none';
              statusBlock.textContent = '';
            }, 1500);
          }

          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны');
    }
  };

  try {
    if (!form) {
      throw new Error('Неверно указана форма');
    }
    requiredEmail();
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
