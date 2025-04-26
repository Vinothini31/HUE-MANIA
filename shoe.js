const products = [
    { id: 1, name: "Casual whit shoes", price: 299.99, img: "1.jpg" },
    { id: 2, name: "Casual printed", price: 359.99, img: " 2.jpg" },
    { id: 3, name: "Frost Flux", price: 415.99, img: "3.jpg" },
    { id: 4, name: "Obsidian Pace", price: 315.99, img: " 4.jpg" },
    { id: 5, name: "Midnight Noir", price: 165.99, img: " 5.jpg" },
    { id: 6, name: "Blackout Chic", price: 205.99, img: " 6.jpg" },
    { id: 7, name: "Shadow Step", price: 106.99, img: "7.jpg" },
    { id: 8, name: "Azure Wave", price: 172.99, img: "8.jpg" },
    { id: 9, name: "Blue Mirage", price: 155.99, img: "9.jpg" },
    { id: 10, name: "Ocean Depth", price: 225.99, img: "10.jpg" },
    { id: 11, name: "Blush Dream", price: 259.99, img: " 11.jpg" },
    { id: 12, name: "Pink Sapphire", price: 613.99, img: " 12.jpg" },
    { id: 13, name: "Cherry Blossom", price: 415.99, img: "13.jpg" },
    { id: 14, name: "Emerald Grove", price: 167.99, img: " 14.jpg" },
    { id: 15, name: "Forest Whisper", price: 215.99, img: "15.jpg" },
    { id: 16, name: "Mint Breeze", price: 532, img: "16.jpg" },
    { id: 17, name: "Sage Dream", price: 115.99, img: "17.jpg" },
    { id: 18, name: "Verdant Pulse", price: 315.99, img: "18.jpg" },
    { id: 19, name: "Amber Rush", price: 173.99, img: "19.jpg" },
    { id: 20, name: "Autumn Flame", price: 215.99, img: "20.jpg" },
    { id: 20, name: "Cardinal Spark", price: 336.99, img: " 21.jpg" },
    { id: 20, name: "Rouge Radiance", price: 432.99, img: " 22.jpg" },
    { id: 20, name: "Lagoon Walk", price: 398.99, img: " 24.jpg" },
    { id: 20, name: "Barefoot Bliss", price: 567.99, img: " 25.jpg" },
    { id: 20, name: "Coral Tide", price: 345.99, img: " 26.jpg" },
    { id: 20, name: "Chestnut Walk", price: 345.99, img: " 27.jpg" },
    { id: 20, name: "Cocoa Blaze", price: 345.99, img: " 28.jpg" },
  ];
  
let cartCount = 0;
  let cartItems = [];
  
  function applyPriceFilter() {
    const min = parseFloat(document.getElementById('minPrice').value) || 0;
    const max = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  
    const filteredProducts = products.filter(product => 
      product.price >= min && product.price <= max
    );
  
    renderFilteredProducts(filteredProducts);
  }
  
  function renderFilteredProducts(filteredList) {
    const container = document.getElementById('products');
    container.innerHTML = '';
  
    filteredList.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-now-btn" onclick="buynow(${product.id})">Buy now</button>
      
      `;
      //for buy now
      container.appendChild(div);
    });
  }
  function renderProducts() {
    const container = document.getElementById('products');
    container.innerHTML = '';
  
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="buynow(${product.id})">Buy Now</button>            
      `;
      //for buy now
      container.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cartItems.push(product);
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
  }
  //for boy now
  function buynow(id) {
    const product = products.find(p => p.id === id);
    const selectedProduct = {
      name: product.name,
      price: product.price,
      imgUrl: product.img
    };
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    window.location.href = 'p.html'; //for buy now
  }
  function openCartModal() {
    const modal = document.getElementById('cartModal');
    const list = document.getElementById('cartItems');
    const total = document.getElementById('cartTotal');
  
    list.innerHTML = '';
    let totalAmount = 0;
  
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      list.appendChild(li);
      totalAmount += item.price;
    });
  
    total.textContent = `Total: $${totalAmount.toFixed(2)}`;
    modal.style.display = 'flex';
  }
  
  function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
  }
  
  document.getElementById('cart').addEventListener('click', openCartModal);
  document.getElementById('closeCart').addEventListener('click', closeCartModal);
  
  // Optional: close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
      closeCartModal();
    }
  });
  
  renderProducts();
  
