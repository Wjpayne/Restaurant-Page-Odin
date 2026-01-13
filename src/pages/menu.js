import pastaImage from "../assets/Pasta.jpg";
import steakImage from "../assets/Steak.jpg";
import waterImage from "../assets/Water.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const items = [
    {
      name: "Sloppy Steak",
      desc: "Sloppily delicious steak with special sauce",
      img: steakImage,
      price: "$49.99",
    },
    {
      name: "Glass of water",
      desc: "Not for drinking",
      img: waterImage,
      price: "$2.99",
    },
    {
      name: "Creamy Pasta",
      desc: "House-made pasta with garlic cream sauce",
      img: pastaImage,
      price: "$20.99",
    },
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.classList.add("menu-image");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    const price = document.createElement("p");
    price.classList.add("menu-price");
    price.textContent = item.price;

    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(title);
    card.appendChild(desc);
    menuGrid.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(menuGrid);
  content.appendChild(section);
}
