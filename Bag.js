
const products = [
    { id: 1, name: "Velvet Vogue", price: 289.99, img: "bags/bag1.avif" },
    { id: 2, name: "Luna Tote", price: 590.0, img: "bags/bag.avif" },
    { id: 3, name: "Blush Belle", price: 450.99, img: "bags/bag3.avif" },
    { id: 4, name: "Moonlit Muse", price: 549.99, img: "bags/bag4.avif" },
    { id: 5, name: "The Hazel Hold", price: 500.00, img: "bags/bag 5.avif" },
    { id: 6, name: "Aurora Carry", price: 800.00, img: "bags/bag6.avif" },
    { id: 7, name: "Dusk Clutch", price: 999.99, img: "bags/bag7.avif" },
    { id: 8, name: "Willow Way", price: 749.99, img: "bags/bag8.avif" },
    { id: 9, name: "Ivory Charm", price: 600.00, img: "bags/bag9.avif" },
    { id: 10, name: "Pearl Pocket", price: 530.00, img: "bags/bag10.avif" },
    { id: 11, name: "Daisy Drape", price: 259.99, img: "bags/bag11.avif" },
    { id: 12, name: "Urban Bloom", price: 379.99, img: "bags/bag12.jpg" },
    { id: 13, name: "Ivory Charm", price: 400.00, img: "bags/bag13.jpeg" },
    { id: 14, name: "The Luxe Carry Collection", price: 600.00, img: "bags/bag14.jpeg" },
    { id: 15, name: "Every day Elegance", price: 699.99, img: "bags/bag15.jpeg" },
    { id: 16, name: "City Chic Bags", price: 400.00, img: "bags/bag16.jpeg" },
    { id: 17, name: "Bold & Beautiful", price: 350.00, img: "bags/bag17.jpeg" },
    { id: 18, name: "Whisper of Style", price: 399.99, img: "bags/bag18.jpeg" },
    { id: 19, name: "Echo Luxe", price: 400.00, img: "bags/bag19.jpeg" },
    { id: 20, name: "Crimson Chic", price: 700.00, img: "bags/bag20.jpeg" },
    { id: 21, name: "ToteTales", price: 800.00, img: "bags/bag21.webp" },
    { id: 22, name: "SlingSwing", price: 700.00, img: "bags/bag22.webp" },
    { id: 23, name: "Zipzy", price: 500.00, img: "bags/bag23.jpg" },
    { id: 24, name: "Bagberry", price: 420.00, img: "bags/bag24.webp" },
    { id: 25, name: "CarryChic", price: 440.00, img: "bags/bag25.webp" },
    { id: 26, name: "Crimson Chic", price: 700.00, img: "bags/bag26.webp" }
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
  //for buy now
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
  

  
