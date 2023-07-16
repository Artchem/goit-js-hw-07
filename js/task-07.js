/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.dir(input);
console.dir(text);

input.addEventListener('input', onInput);

function onInput(event) {
  console.dir(event.currentTarget.value);

  console.log(text.textContent);

  text.style.fontSize = `${event.currentTarget.value}px`;
}
