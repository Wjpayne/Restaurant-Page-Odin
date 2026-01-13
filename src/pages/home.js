export default function loadHome() {
  const content = document.getElementById('content');
  const section = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = "Welcome to Our Restaurant";

  section.appendChild(title);
  content.appendChild(section);
}