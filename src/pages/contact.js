export default function loadContact() {
const content = document.getElementById('content');


const section = document.createElement('section');
section.classList.add('page');


const heading = document.createElement('h1');
heading.textContent = 'Visit Us';


const info = document.createElement('div');
info.classList.add('contact-info');


info.innerHTML = `
<p><strong>📍 Address:</strong> 123 ITYSL, Valhalla</p>
<p><strong>📞 Phone:</strong> 555-123-4567</p>
<p><strong>⏰ Hours:</strong> Mon–Sun, 11am – 10pm</p>
`;


section.appendChild(heading);
section.appendChild(info);
content.appendChild(section);
}