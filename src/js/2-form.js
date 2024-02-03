// const form = document.querySelector('form.feedback-form');
// const email = form.elements.email;
// const textarea = form.elements.message;

// const STORAGE_KEY = 'feedback-form-state';

// function getFormValues() {
//   const storedValue = localStorage.getItem(STORAGE_KEY);
//   return storedValue ? JSON.parse(storedValue) : {};
// }

// const formValues = getFormValues();
// console.log(formValues);

// form.addEventListener('input', evt => {
//   const { name, value } = evt.target;
//   const trimmedValue = value.trim();
//   localStorage.setItem(
//     STORAGE_KEY,
//     JSON.stringify({
//       ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),
//       [name]: trimmedValue,
//     })
//   );
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(textarea.value);
//   console.log(email.value);
//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// });

// function fillingForm() {
//   const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

//   if (storedData.message) {
//     textarea.value = storedData.message;
//   }

//   if (storedData.email) {
//     email.value = storedData.email;
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fillingForm();
// });

// const form = document.querySelector('form.feedback-form');
// const email = form.elements.email;
// const textarea = form.elements.message;

// const STORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', evt => {
//   const { name, value } = evt.target;
//   const trimmedValue = value.trim();
//   localStorage.setItem(
//     STORAGE_KEY,
//     JSON.stringify({
//       ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),
//       [name]: trimmedValue,
//     })
//   );
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();

//   if (!textarea.value || !email.value) {
//     iziToast.error({
//       title: 'Error',
//       message: 'Please fill in all fields before submitting',
//     });
//     return;
//   }

//   console.log({ message: textarea.value, email: email.value });
//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// });

// function fillingForm() {
//   const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

//   if (storedData.message) {
//     textarea.value = storedData.message;
//   }

//   if (storedData.email) {
//     email.value = storedData.email;
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  fillingForm();
});

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  const trimmedValue = value.trim();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),
      [name]: trimmedValue,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!textarea.value || !email.value) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in all fields before submitting',
    });
    return;
  }

  console.log({ message: textarea.value, email: email.value });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function fillingForm() {
  const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  if (storedData.message) {
    textarea.value = storedData.message;
  }

  if (storedData.email) {
    email.value = storedData.email;
  }
}
