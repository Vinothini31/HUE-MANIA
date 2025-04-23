const items = [
  { name: "Bag", color: "pink", image: "hueimg/bags/bag19.jpeg" },
  { name: "watch", color: "black", image: "hueimg/watch/w4.jpg" },
  { name: "Earrings", color: "teal", image: "hueimg/earrings/120.jpg" },
  { name: "handbags", color: "black", image: "hueimg/bags/bag13.jpeg" },
  { name: "Bracelet", color: "orange", image: "hueimg/bracelet/p9.jpg" },
  { name: "neckless", color: "yellow", image: "hueimg/pen/4.jpg" },
  { name: "red watch", color: "red", image: "hueimg/watch/w1.jpg" },
  { name: "Purple watch", color: "purple", image: "hueimg/watch/w13.webp" },
  { name: "earings", color: "yellow", image: "hueimg/earrings/111.jpg" },
  { name: "Bracelet", color: "gray", image: "hueimg/bracelet/p5.jpg" },
  { name: "Shoe", color: "pink", image: "hueimg/shoe/11.jpg" },
  { name: "Sandals", color: "black", image: "hueimg/sandal/sandals 1.jpg" },
  { name: "Hairclip", color: "peach", image: "hueimg/hairclip/flower lock.jpg" }
];

const colorList = [
  { name: "red", color: "red" },
  { name: "blue", color: "blue" },
  { name: "green", color: "green" },
  { name: "yellow", color: "yellow" },
  { name: "black", color: "black" },
  { name: "white", color: "#ffffff" },
  { name: "orange", color: "orange" },
  { name: "purple", color: "purple" },
  { name: "brown", color: "brown" },
  { name: "gray", color: "gray" },
  { name: "pink", color: "pink" },
  { name: "teal", color: "teal" },
  { name: "peach", color: "#FFDAB9" }
];

let selectedColor = "";

function createColorWheel() {
  const wheel = document.getElementById("colorWheel");
  const radius = 40;
  const centerX = 50;
  const centerY = 50;
  const total = colorList.length;

  colorList.forEach((color, i) => {
    const angle = (i / total) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - 10;
    const y = centerY + radius * Math.sin(angle) - 10;

    const div = document.createElement("div");
    div.className = "color-circle";
    div.style.background = color.color;
    div.title = color.name;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.setAttribute("data-color", color.name);

    div.addEventListener("click", () => {
      document.querySelectorAll(".color-circle").forEach(c => c.classList.remove("selected"));
      div.classList.add("selected");
      selectedColor = color.name;
      searchItems();
    });

    wheel.appendChild(div);
  });
}

function searchItems() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  const filteredItems = items.filter(item => {
    const matchesText = item.name.toLowerCase().includes(searchInput);
    const matchesColor = selectedColor === "" || item.color === selectedColor;
    return matchesText && matchesColor;
  });

  resultsContainer.innerHTML = "";

  if (filteredItems.length === 0) {
    resultsContainer.innerHTML = "<p>No items found.</p>";
  } else {
    filteredItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "result-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/160';">
        <span>${item.name}</span>
      `;
      resultsContainer.appendChild(div);
    });
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  selectedColor = "";
  document.querySelectorAll(".color-circle").forEach(c => c.classList.remove("selected"));
  searchItems();
}

function clearColor() {
  selectedColor = "";
  document.querySelectorAll(".color-circle").forEach(c => c.classList.remove("selected"));
  searchItems();
}

window.onload = () => {
  createColorWheel();
  searchItems();
};
