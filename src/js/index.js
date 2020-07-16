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

const maslo = localStorage.getItem(key);
console.log(maslo);

// History of glasses

const values = [];
const keys = Object.keys(localStorage);
let i = keys.length;
while (i--) {
  values.push({
    data: keys[i],
    value: localStorage.getItem(keys[i]),
  });
  console.log(values);
}



const checkbox = document.querySelector(".checkbox");
const check = document.querySelector(".check");


checkbox.addEventListener('click', ()=> {
  if (checkbox.checked == true) {
    console.log("prawda");
    check.classList.add("checked");
    document.documentElement.style.setProperty('--text-color','white');
  }

  else {
    check.classList.remove("checked");
    document.documentElement.style.setProperty('--text-color','rgb(24, 24, 24)');
  }
})