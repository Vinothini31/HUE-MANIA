const items = [
    { name: "Bag", color: "pink", image: "hueimg/bags/bag19.jpeg" },
    { name: "watch", color: "black", image: "hueimg/watch/w4.jpg" },
    { name: "hairclip", color: "gray", image: "hueimg/hairclip/blubby white.jpg" },
    { name: "sandal", color: "purple", image: "hueimg/sandal/sandals 32.jpg" },
    { name: "Earrings", color: "teal", image: "hueimg/earrings/120.jpg" },
    { name: "Shoe", color: "brown", image: "hueimg/shoe/27.jpg" },
    { name: "handbags", color: "black", image: "hueimg/bags/bag13.jpeg" },
    { name: "Bracelet", color: "orange", image: "hueimg/bracelet/p9.jpg" },
    { name: "neckless", color: "yellow", image: "hueimg/pen/4.jpg" },
    { name: "red watch", color: "red", image: "hueimg/watch/w1.jpg" },
    { name: "Purple watch", color: "purple", image: "hueimg/watch/w13.webp" },
    { name: "Hairclip", color: "brown", image: "hueimg/hairclip/bakefy 3 piece clawclips.jpg" },
    { name: "earings", color: "yellow", image: "hueimg/earrings/111.jpg" },
    { name: "Bracelet", color: "gray", image: "hueimg/bracelet/p5.jpg" },
    { name: "Shoe", color: "pink", image: "hueimg/shoe/11.jpg" },
    { name: "Sandals", color: "black", image: "hueimg/sandal/sandals 1.jpg" },
    { name: "Hairclip", color: "peach", image: "hueimg/hairclip/flower lock.jpg" },
    { name: "watch", color: "peach", image: "hueimg/watch/w25.jpeg" },
    { name: "handbags", color: "red", image: "hueimg/bags/bag15.jpeg" },
    { name: "earings", color: "white", image: "hueimg/earrings/115.jpg" },
    { name: "watch", color: "blue", image: "hueimg/watch/w19.webp" },
    { name: "handbags", color: "orange", image: "hueimg/bags/bag21.webp" },
    { name: "watch", color: "yellow", image: "hueimg/watch/w20.webp" },
    { name: "watch", color: "orange", image: "hueimg/watch/w18.jpeg" },
    { name: "Bracelet", color: "green", image: "hueimg/bracelet/p2.jpg" },
    { name: "earings", color: "brown", image: "hueimg/earrings/117.jpg" },
    { name: "hairclip", color: "black", image: "hueimg/hairclip/acrylic hair claw.webp" },
    { name: "sandal", color: "white", image: "hueimg/sandal/sandals 14.jpg" },
    { name: "watch", color: "green", image: "hueimg/watch/w12.webp" },
    { name: "Bracelet", color: "peach", image: "hueimg/bracelet/p13.jpg" },
    { name: "handbags", color: "purple", image: "hueimg/bags/bag24.webp" },
    { name: "watch", color: "brown", image: "hueimg/watch/w5.webp" },
    { name: "watch", color: "gray", image: "hueimg/watch/w118.jpg" },
    { name: "earings", color: "teal", image: "hueimg/earrings/119.jpg" },
    { name: "handbags", color: "brown", image: "hueimg/bags/bag25.webp" },
    { name: "watch", color: "teal", image: "hueimg/watch/w14.jpg" },
    { name: "handbags", color: "green", image: "hueimg/bags/bag17.jpeg" },
    { name: "neckless", color: "purple", image: "hueimg/pen/14.jpg" },
    { name: "handbags", color: "peal", image: "hueimg/bags/bag1.avif" },
    { name: "neckless", color: "pink", image: "hueimg/pen/19.jpg" },
    { name: "handbags", color: "peach", image: "hueimg/bags/bag4.avif" },
    { name: "neckless", color: "red", image: "hueimg/pen/10.jpg" },
    { name: "Shoe", color: "red", image: "hueimg/shoe/23.jpg" },
    { name: "Shoe", color: "blue", image: "hueimg/shoe/9.jpg" },
    { name: "hairclip", color: "orange", image: "hueimg/hairclip/mizorri single flower rhinestone.webp" },
    { name: "Shoe", color: "green", image: "hueimg/shoe/16.jpg" },
    { name: "neckless", color: "blue", image: "hueimg/pen/16.jpg" },
    { name: "hairclip", color: "pink", image: "hueimg/hairclip/ahoney pink clips.jpg" },
    { name: "Shoe", color: "white", image: "hueimg/shoe/3.jpg" },
    { name: "neckless", color: "black", image: "hueimg/pen/11.jpg" },
    { name: "Shoe", color: "yellow", image: "hueimg/shoe/18.jpg" },
    { name: "hairclip", color: "teal", image: "hueimg/hairclip/palay.jpg" },
    { name: "Shoe", color: "orange", image: "hueimg/shoe/19.jpg" },
    { name: "hairclip", color: "blue", image: "hueimg/hairclip/korean style blue metal butterfly.webp" },
    { name: "Shoe", color: "gray", image: "hueimg/shoe/35.jpg" },
    { name: "hairclip", color: "white", image: "hueimg/hairclip/dlassie trends pearl.webp" },
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
  
