export default function loadHome() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Truffoni's";

  const text = document.createElement("p");
  text.textContent = "Home of the Sloppy Steak!";

  section.appendChild(heading);
  section.appendChild(text);
  content.appendChild(section);
}
