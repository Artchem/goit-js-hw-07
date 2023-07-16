/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const controlsRef = document.querySelector('#controls');
const inputValueRef = controlsRef.firstElementChild;
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

console.dir(controlsRef);
console.dir(inputValueRef);
console.dir(btnCreateRef);
console.dir(btnDestroyRef);

btnCreateRef.addEventListener('click', onBtnCreateClick);
function onBtnCreateClick() {
  createBoxes(inputValueRef.value);
}

btnDestroyRef.addEventListener('click', onBtnDestroyClick);
function onBtnDestroyClick() {
  boxesRef.innerHTML = '';
}
//

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  const step = 10;
  let arreyBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    boxWidth += step;
    boxHeight += step;

    box.style.backgroundColor = getRandomHexColor();
    arreyBoxes.push(box);
  }

  boxesRef.append(...arreyBoxes);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
