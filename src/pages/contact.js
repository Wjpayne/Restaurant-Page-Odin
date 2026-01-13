export default function loadContact() {
  const content = document.getElementById('content');
  const section = document.createElement('div');

  const heading = document.createElement('h2');
  heading.textContent = "Contact Us";

  section.appendChild(heading);
  content.appendChild(section);
} 