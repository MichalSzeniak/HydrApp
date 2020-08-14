import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀');

const counter = document.querySelector('.counter--js');
const addButton = document.querySelector('.add-glass--js');
const removeButton = document.querySelector('.remove-glass--js');
const key = new Date().toLocaleString().slice(0, 10);
const listButton = document.querySelector('.list__button--js');
const listContainer = document.querySelector('.list__container');
const closeButton = document.querySelector('.close-button--js');
const listHistory = document.querySelector('.list-history');
// const settingsButton = document.querySelector('.settings__button--js');
// const settingsContainer = document.querySelector('.settings__container');
// const closeButton2 = document.querySelector('.close-button2--js');

listButton.addEventListener('click', () => {
  // listContainer.classList.add('list__open');
  listContainer.style.top = "0";
});


closeButton.addEventListener('click', () => {
  // listContainer.classList.remove('list__open');
  listContainer.style.top = "-1000vh";
});

// settingsButton.addEventListener('click', ()=> {
//   settingsContainer.style.top = "0";
// })

// closeButton2.addEventListener('click', () => {
//   settingsContainer.style.top = "-1000vh";
// })


  //  Counter 
let counterValue = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  counterValue = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

counter.innerHTML = counterValue;

addButton.addEventListener('click', () => {
  counterValue++;
  counter.innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
});

removeButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue--;
  }
  counter.innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
});

// History of glasses

const keys = Object.keys(localStorage);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  const el = document.createElement("div");
  el.className = "list__table"
  el.innerHTML = `
    <h3 class="list__table--data">${keys[i]}</h3>
    <p class="list__table--value">${localStorage.getItem(keys[i])}</p>
  `;
  listHistory.prepend(el);
}

//black mode
const checkbox = document.querySelector('.checkbox');
const check = document.querySelector('.check');

checkbox.addEventListener('click', () => {
  if (checkbox.checked == true) {
    check.classList.add('checked');
    document.documentElement.style.setProperty('--background-color', '#313131');
    document.documentElement.style.setProperty('--background-window', '#313131');
    document.documentElement.style.setProperty('--text-color', 'white');
  } else {
    check.classList.remove('checked');
    document.documentElement.style.setProperty('--background-color', '#3767AD');
    document.documentElement.style.setProperty('--background-window', 'white');
    document.documentElement.style.setProperty('--text-color', '#181818');
  }
});

