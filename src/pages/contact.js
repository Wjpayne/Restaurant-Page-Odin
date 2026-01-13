export default function loadContact() {
const content = document.getElementById('content');


const section = document.createElement('section');
section.classList.add('page');


const heading = document.createElement('h1');
heading.textContent = 'Contact Us';


const phone = document.createElement('p');
phone.textContent = '📞 555‑123‑4567';


const address = document.createElement('p');
address.textContent = '🏠 123 Odin Street, Valhalla';


section.appendChild(heading);
section.appendChild(phone);
section.appendChild(address);
content.appendChild(section);
}