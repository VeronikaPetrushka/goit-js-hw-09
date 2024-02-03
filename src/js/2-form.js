import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
