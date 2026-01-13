export default function loadHome() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Truffoni's";

  const image = document.createElement("img");
  image.src = "https://cdn.nerdist.com/wp-content/uploads/2021/07/12215601/Sloppy-Steaks-Binging-With-Babish.jpg";
  image.alt = "Restaurant hero image";
  image.classList.add("hero-image");

  const text = document.createElement("p");
  text.textContent = "Home of the Sloppy Steak!";

  section.appendChild(heading);
  section.appendChild(text);
  section.appendChild(image);
  content.appendChild(section);
}
