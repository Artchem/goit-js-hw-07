/*
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const elements = ingredients.map(ingredient => {
//   const liRef = document.createElement('li');
//   liRef.textContent = ingredient;
//   liRef.classList.add('item');

//   return liRef;
// });

// console.dir(elements);

// const ulRef = document.querySelector('#ingredients');
// ulRef.append(...elements);

const makeItemForIngredients = options => {
  return options.map(option => {
    const liRef = document.createElement('li');
    liRef.textContent = option;
    liRef.classList.add('item');

    return liRef;
  });
};

const elements = makeItemForIngredients(ingredients);

console.log(elements);

const ulRef = document.querySelector('#ingredients');
ulRef.append(...elements);
