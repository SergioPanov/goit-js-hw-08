import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const btnRef = document.querySelector('button[type="submit"]');
const emailInputRef = document.querySelector('input[name="email"]');
const messageTextRef = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const actualObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? '';
emailInputRef.value = actualObj.email || '';
messageTextRef.value = actualObj.message || '';

let dataObj = {
  email: actualObj.email || '',
  message: actualObj.message || '',
};

// Input

function onInputFill(e) {
  dataObj[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));

  if (emailInputRef.value !== '' && messageTextRef.value !== '') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
  }
}

// Submit
const onFormSubmit = e => {
  e.preventDefault();

  if (
    emailInputRef.value === '' ||
    messageTextRef.value === '' ||
    messageTextRef.value === ''
  ) {
    alert('Fill all the gaps!');
  } else {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(localData);
    formRef.reset();
    window.localStorage.removeItem(STORAGE_KEY);
    dataObj = {};
  }
};

formRef.addEventListener('input', throttle(onInputFill, 500));
formRef.addEventListener('submit', onFormSubmit);
