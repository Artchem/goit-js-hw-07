/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputBlur = document.querySelector('#validation-input');

console.dir(inputBlur);

inputBlur.addEventListener('blur', onBlurInput);

console.log(inputBlur.dataset.length);
// console.log(input.blur() === 'true');

function onBlurInput(event) {
  const inputValueLength = event.currentTarget.value.length;
  const lengthData = Number(inputBlur.dataset.length);

  if (inputValueLength !== lengthData) {
    inputBlur.classList.add('invalid');
    inputBlur.classList.remove('valid');
  } else {
    inputBlur.classList.add('valid');
    inputBlur.classList.remove('invalid');
  }
}
