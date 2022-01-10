'use strict';

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = new Date();
let array = [];

const startDate = () => {
  today = new Date();
  array = [];
  getHello();
  getDay();
  getTime();
  getNewYearDays();
  toHTML();
};

const getHello = () => {
  let hello;
  switch (true) {
    case today.getHours() < 7:
      hello = 'Доброй ночи';
      break;
    case today.getHours() >= 7 && today.getHours() < 12:
      hello = 'Доброе утро';
      break;
    case today.getHours() >= 12 && today.getHours() < 17:
      hello = 'Добрый день';
      break;
    case today.getHours() >= 17 && today.getHours() <= 23:
      hello = 'Добрый вечер';
      break;
  }
  array.push(hello);
};

const getDay = () => {
  let day = days[today.getDay()];
  array.push(`Сегодня: ${day}`);
};

const getTime = () => {
  let time = today.toLocaleTimeString('ru');
  array.push(`Текущее время: ${time}`);
};

const getNewYearDays = () => {
  const dateNewYear = new Date('1 January 2023');
  const timeNewYear = dateNewYear.getTime() - today.getTime();
  const daysNewYear = Math.floor(timeNewYear / 1000 / 60 / 60 / 24);
  array.push(`До нового года осталось ${daysNewYear} дней`);
};

const toHTML = () => {
  document.body.innerHTML = '';
  array.forEach((item) => {
    const div = document.createElement('div');
    div.textContent = item;
    document.body.append(div);
  });
};

setInterval(startDate, 1000);
