export default function loadMenu() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const items = [
    { name: "16oz Steak", desc: "Slop it up!" },
    { name: "Water", desc: "Not for drinking" },
    {
      name: "Loaded Baked Potato",
      desc: "Loaded with cheese, bacon, and sour cream",
    },
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    card.appendChild(title);
    card.appendChild(desc);
    menuGrid.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(menuGrid);
  content.appendChild(section);
}
