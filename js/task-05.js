/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

console.dir(nameInputRef);
console.dir(nameOutputRef);

nameInputRef.addEventListener('input', onNameInput);

function onNameInput(event) {
  console.log(event.currentTarget.value);

  nameOutputRef.textContent = event.currentTarget.value;

  if (nameOutputRef.textContent === '') {
    nameOutputRef.textContent = 'Anonymous';
  }
}
