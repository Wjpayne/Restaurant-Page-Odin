export default function loadHome() {
const content = document.getElementById('content');


const section = document.createElement('section');
section.classList.add('page');


const heading = document.createElement('h1');
heading.textContent = 'Welcome to Odin Restaurant';


const text = document.createElement('p');
text.textContent = 'The best fictional food in the JavaScript universe.';


section.appendChild(heading);
section.appendChild(text);
content.appendChild(section);
}