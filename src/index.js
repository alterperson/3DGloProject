import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('21:00:00 13 January 2022');
menu();
modal();
calc();
forms('form1');
forms('form2');
forms('form3');
tabs();
slider();
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
