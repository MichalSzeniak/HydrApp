import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀');

const counter = document.querySelector('.counter--js');
const addButton = document.querySelector('.add-glass--js');
const removeButton = document.querySelector('.remove-glass--js');

let counterValue = 0;

addButton.addEventListener('click', () => {
  counterValue++;
  console.log(counterValue);
  counter.innerHTML = counterValue;
});

removeButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue--;
  }
  console.log(counterValue);
  counter.innerHTML = counterValue;
});