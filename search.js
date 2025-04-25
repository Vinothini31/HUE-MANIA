let selectedColor = "";

const accessoryData = {
  minimalist: [
    { color: '#ffffff', accessory: 'White Earrings' },
    { color: '#e0e0e0', accessory: 'Grey Handbag' },
    { color: '#cccccc', accessory: 'Silver Necklace' },
    { color: '#a0a0a0', accessory: 'Matte Bangles' },
    { color: '#dcdcdc', accessory: 'Minimalist Watch' },
    { color: '#f5f5f5', accessory: 'Beige Sandals' },
    { color: '#b0b0b0', accessory: 'Neutral Sunglasses' },
    { color: '#f0f0f0', accessory: 'White Scarf' }
  ],
  vibrant: [
    { color: '#ff4500', accessory: 'Orange Earrings' },
    { color: '#ffa500', accessory: 'Bold Handbag' },
    { color: '#ff1493', accessory: 'Hot Pink Necklace' },
    { color: '#00ff7f', accessory: 'Green Bangles' },
    { color: '#1e90ff', accessory: 'Blue Watch' },
    { color: '#ff69b4', accessory: 'Pink Sandals' },
    { color: '#ff6347', accessory: 'Red Sunglasses' },
    { color: '#adff2f', accessory: 'Neon Scarf' }
  ],
  elegant: [
    { color: '#2c2c54', accessory: 'Navy Earrings' },
    { color: '#706fd3', accessory: 'Lavender Handbag' },
    { color: '#a29bfe', accessory: 'Pearl Necklace' },
    { color: '#6c5ce7', accessory: 'Plum Bangles' },
    { color: '#cd84f1', accessory: 'Rose Gold Watch' },
    { color: '#c8b6ff', accessory: 'Lilac Sandals' },
    { color: '#9980fa', accessory: 'Soft Sunglasses' },
    { color: '#dcd6f7', accessory: 'Elegant Scarf' }
  ],
  streetwear: [
    { color: '#000000', accessory: 'Black Earrings' },
    { color: '#ff2e63', accessory: 'Street Handbag' },
    { color: '#08d9d6', accessory: 'Chunky Necklace' },
    { color: '#252a34', accessory: 'Dark Bangles' },
    { color: '#6c757d', accessory: 'Urban Watch' },
    { color: '#ff5722', accessory: 'Bold Sandals' },
    { color: '#1f4068', accessory: 'Reflective Sunglasses' },
    { color: '#16213e', accessory: 'Graffiti Scarf' }
  ]
};

const items = [
  { name: "Bag", color: "pink", image: "hueimg/bags/bag19.jpeg",link: "Bag.html" },
  { name: "watch", color: "black", image: "hueimg/watch/w4.jpg",link: "watch.html" },
  { name: "hairclip", color: "gray", image: "hueimg/hairclip/7.jpg",link: "hairclip.html" },
  { name: "sandal", color: "purple", image: "hueimg/sandal/sandals 32.jpg",link: "sandal.html" },
  { name: "Earrings", color: "teal", image: "hueimg/earrings/120.jpg",link: "earrings.html" },
  { name: "Shoe", color: "brown", image: "hueimg/shoe/27.jpg",link: "shoe.html" },
  { name: "handbags", color: "black", image: "hueimg/bags/bag13.jpeg",link: "Bag.html" },
  { name: "Bracelet", color: "orange", image: "hueimg/bracelet/p9.jpg",link: "Bracelets.html" },
  { name: "neckless", color: "yellow", image: "hueimg/pen/4.jpg",link: "pendants.html" },
  { name: "red watch", color: "red", image: "hueimg/watch/w1.jpg",link: "watch.html" },
  { name: "Purple watch", color: "purple", image: "hueimg/watch/w13.webp",link: "watch.html" },
  { name: "Hairclip", color: "brown", image: "hueimg/hairclip/3.jpg",link: "hairclip.html" },
  { name: "earings", color: "yellow", image: "hueimg/earrings/111.jpg",link: "earrings.html" },
  { name: "Bracelet", color: "gray", image: "hueimg/bracelet/p5.jpg" ,link: "Bracelets.html"},
  { name: "Shoe", color: "pink", image: "hueimg/shoe/11.jpg" ,link: "shoe.html"},
  { name: "Sandals", color: "black", image: "hueimg/sandal/sandals 1.jpg",link: "sandal.html" },
  { name: "Hairclip", color: "peach", image: "hueimg/hairclip/10.jpg" ,link: "hairclip.html"},
  { name: "watch", color: "peach", image: "hueimg/watch/w25.jpeg" ,link: "watch.html"},
  { name: "handbags", color: "red", image: "hueimg/bags/bag15.jpeg",link: "Bag.html" },
  { name: "earings", color: "white", image: "hueimg/earrings/115.jpg",link: "earrings.html" },
  { name: "watch", color: "blue", image: "hueimg/watch/w19.webp",link: "watch.html" },
  { name: "handbags", color: "orange", image: "hueimg/bags/bag21.webp",link: "Bag.html" },
  { name: "watch", color: "yellow", image: "hueimg/watch/w20.webp",link: "watch.html" },
  { name: "watch", color: "orange", image: "hueimg/watch/w18.jpeg" ,link: "watch.html"},
  { name: "Bracelet", color: "green", image: "hueimg/bracelet/p2.jpg",link: "Bracelets.html" },
  { name: "earings", color: "brown", image: "hueimg/earrings/117.jpg" ,link: "earrings.html"},
  { name: "Hairclip", color: "black", image: "hueimg/hairclip/1.webp" ,link: "hairclip.html"},
  { name: "sandal", color: "white", image: "hueimg/sandal/sandals 1.jpg",link: "sandal.html" },
  { name: "watch", color: "green", image: "hueimg/watch/w12.webp" ,link: "watch.html"},
  { name: "Bracelet", color: "peach", image: "hueimg/bracelet/p13.jpg",link: "Bracelets.html" },
  { name: "handbags", color: "purple", image: "hueimg/bags/bag24.webp",link: "Bag.html" },
  { name: "watch", color: "brown", image: "hueimg/watch/w5.webp" ,link: "watch.html"},
  { name: "watch", color: "gray", image: "hueimg/watch/w118.jpg" ,link: "watch.html"},
  { name: "earings", color: "teal", image: "hueimg/earrings/119.jpg",link: "earrings.html" },
  { name: "handbags", color: "brown", image: "hueimg/bags/bag25.webp",link: "Bag.html" },
  { name: "watch", color: "teal", image: "hueimg/watch/w14.jpg" ,link: "watch.html"},
  { name: "handbags", color: "green", image: "hueimg/bags/bag17.jpeg" ,link: "Bag.html"},
  { name: "neckless", color: "purple", image: "hueimg/pen/14.jpg" ,link: "pendants.html"},
  { name: "handbags", color: "peal", image: "hueimg/bags/bag1.avif",link: "Bag.html" },
  { name: "neckless", color: "pink", image: "hueimg/pen/19.jpg" ,link: "pendants.html"},
  { name: "handbags", color: "peach", image: "hueimg/bags/bag4.avif",link: "Bag.html" },
  { name: "neckless", color: "red", image: "hueimg/pen/10.jpg" ,link: "pendants.html"},
  { name: "Shoe", color: "red", image: "hueimg/shoe/23.jpg",link: "shoe.html" },
  { name: "Shoe", color: "blue", image: "hueimg/shoe/9.jpg",link: "shoe.html" },
  { name: "hairclip", color: "orange", image: "hueimg/hairclip/14.webp",link: "hairclip.html" },
  { name: "Shoe", color: "green", image: "hueimg/shoe/16.jpg",link: "shoe.html" },
  { name: "neckless", color: "blue", image: "hueimg/pen/16.jpg",link: "pendants.html" },
  { name: "hairclip", color: "pink", image: "hueimg/hairclip/2.jpg",link: "hairclip.html" },
  { name: "Shoe", color: "white", image: "hueimg/shoe/3.jpg" ,link: "shoe.html"},
  { name: "neckless", color: "black", image: "hueimg/pen/11.jpg",link: "pendants.html" },
  { name: "Shoe", color: "yellow", image: "hueimg/shoe/18.jpg",link: "shoe.html" },
  { name: "hairclip", color: "teal", image: "hueimg/hairclip/15.jpg",link: "hairclip.html" },
  { name: "Shoe", color: "orange", image: "hueimg/shoe/19.jpg",link: "shoe.html" },
  { name: "hairclip", color: "blue", image: "hueimg/hairclip/13.webp",link: "hairclip.html" },
  { name: "Shoe", color: "gray", image: "hueimg/shoe/35.jpg",link: "shoe.html" },
  { name: "hairclip", color: "white", image: "hueimg/hairclip/9.webp",link: "hairclip.html" },
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

function createColorWheel() {
  const wheel = document.getElementById("colorWheel");
  const radius = 50;
  const centerX = 60;
  const centerY = 60;
  const total = colorList.length;

  colorList.forEach((color, i) => {
    const angle = (i / total) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

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

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.style.width = "150px";
      img.style.margin = "10px";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "2px 2px 6px #ccc";

      const name = document.createElement("span");
      name.textContent = item.name;

      div.appendChild(img);
      div.appendChild(document.createElement("br"));
      div.appendChild(name);

      div.style.cursor = "pointer";
      div.addEventListener("click", () => {
        window.location.href = item.link;
      });

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

function toggleStyleMatch() {
  const panel = document.getElementById('stylematchPanel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function renderCards() {
  const style = document.getElementById('style').value;
  const container = document.getElementById('results');
  container.innerHTML = '';

  if (accessoryData[style]) {
    accessoryData[style].forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const colorDiv = document.createElement('div');
      colorDiv.className = 'color-box';
      colorDiv.style.backgroundColor = item.color;

      const label = document.createElement('div');
      label.className = 'accessory-label';
      label.textContent = item.accessory;

      card.appendChild(colorDiv);
      card.appendChild(label);
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p style="text-align:center;">Please select a style above 👆</p>';
  }
}

window.onload = () => {
  createColorWheel();
  searchItems();
};
