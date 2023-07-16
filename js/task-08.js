/*
Напиши скрипт управління формою логіна.

1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
5.Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector('.login-form');

console.dir(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget.elements.email.value);

  const { email, password } = event.currentTarget.elements;
  //   console.dir(email.value);
  //   console.dir(password.value);

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!!!');
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.dir(event.currentTarget.elements.email.value);

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name = ', name);
//     console.log('onFormSubmit -> value = ', value);
//   });
// }
