const items = [
    { name: "Bag", color: "pink", image: "bags.webp" },
    { name: "watch", color: "black", image: "watch.jpeg" },
    { name: "Hairbands", color: "green", image: "hairbands.jpeg" },
    { name: "handbags", color: "black", image: "Bags.jpeg" },
    { name: "chain", color: "black", image: "chain.jpeg" },
    { name: "neckless", color: "yellow", image: "neckless.jpeg" },
    { name: "red watch", color: "red", image: "Red watch.jpeg" },
    { name: "Purple watch", color: "purple", image: "purple watch.jpeg" },
    { name: "earings", color: "yellow", image: "earings.jpeg" },
    { name: "Gray Hoodie", color: "gray", image: "images/gray-hoodie.jpg" },
    { name: "Pink Skirt", color: "pink", image: "images/pink-skirt.jpg" },
    { name: "Teal Cap", color: "teal", image: "images/teal-cap.jpg" },
    { name: "Peach Top", color: "peach", image: "images/peach-top.jpg" }
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
  