import sloppySteakImage from "../assets/Sloppy-Steak.jpg";

export default function loadHome() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page", "hero");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Truffoni's";

  const image = document.createElement("img");
  image.src = sloppySteakImage;
  image.alt = "Restaurant hero image";
  image.classList.add("hero-image");

  const text = document.createElement("p");
  text.textContent = "Home of the Sloppy Steak!";

  section.appendChild(heading);
  section.appendChild(text);
  section.appendChild(image);
  content.appendChild(section);
}
