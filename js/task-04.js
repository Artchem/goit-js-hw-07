/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.



Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

console.dir(decrementRef);
console.dir(incrementRef);
console.dir(valueRef);

decrementRef.addEventListener('click', onDecrementClick);
incrementRef.addEventListener('click', onIncrementClick);

function onDecrementClick(event) {
  counterValue -= 1;
  console.log(event.currentTarget);
  valueRef.textContent = counterValue;
}

function onIncrementClick(event) {
  counterValue += 1;
  console.log(event.currentTarget);
  valueRef.textContent = counterValue;
}
