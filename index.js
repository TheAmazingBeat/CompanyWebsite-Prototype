// Import stylesheets
import './style.css';

const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const bumboBtn = document.getElementById('bumbo');
const natureBtn = document.getElementById('nature');
const oceanBtn = document.getElementById('ocean');
const body = document.body;

lightBtn.onclick = () => {
  let existingClass = body.classList.toString();
  body.classList.replace(existingClass, 'light');
};

darkBtn.onclick = () => {
  let existingClass = body.classList.toString();
  body.classList.replace(existingClass, 'dark');
};

bumboBtn.onclick = () => {
  let existingClass = body.classList.toString();
  body.classList.replace(existingClass, 'bumbo');
};

natureBtn.onclick = () => {
  let existingClass = body.classList.toString();
  body.classList.replace(existingClass, 'nature');
};

oceanBtn.onclick = () => {
  let existingClass = body.classList.toString();
  body.classList.replace(existingClass, 'ocean');
};
