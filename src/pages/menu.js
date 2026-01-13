export default function loadMenu() {
  const content = document.getElementById('content');
  const section = document.createElement('div');

  const heading = document.createElement('h2');
  heading.textContent = "Our Menu";

  section.appendChild(heading);
  content.appendChild(section);
}