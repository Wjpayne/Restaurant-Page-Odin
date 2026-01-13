import "./styles.css";

import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadContact from './pages/contact';

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

function setNavEvents() {
document.getElementById('home-btn').addEventListener('click', () => {
clearContent();
loadHome();
});
}



document.getElementById('home-btn').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clearContent();
  loadContact();
});

// initial load
setNavEvents();
loadHome();

