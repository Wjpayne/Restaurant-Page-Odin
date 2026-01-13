export default function loadMenu() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const items = ["Steak", "Water", "Salad", "Fries"];

  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  section.appendChild(heading);
  section.appendChild(list);
  content.appendChild(section);
}
