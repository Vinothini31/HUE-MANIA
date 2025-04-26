
const products = [
    { id: 1, name: "Eterna Bloom", price: 289.99, img: "watch/w1.jpg" },
    { id: 2, name: "Luna Dial", price: 590.0, img: "watch/w2.jpg" },
    { id: 3, name: "Velora Time", price: 450.99, img: "watch/w3.webp" },
    { id: 4, name: "Ivory Ticks", price: 549.99, img: "watch/w4.jpg" },
    { id: 5, name: "Sapphire Circle", price: 500.00, img: "watch/w5.webp" },
    { id: 6, name: "Rosé Hour", price: 800.00, img: "watch/w6.webp" },
    { id: 7, name: "Golden Glance", price: 999.99, img: "watch/w7.jpg" },
    { id: 8, name: "Whisper Watch", price: 749.99, img: "watch/w8.webp" },
    { id: 9, name: "Aurora Quartz", price: 600.00, img: "watch/w9.jpg" },
    { id: 10, name: "Moonbeam Minute", price: 530.00, img: "watch/w10.jpg" },
    { id: 11, name: "Silva Luxe", price: 259.99, img: "watch/w11.jpg" },
    { id: 12, name: "Dusk Dial", price: 379.99, img: "watch/w12.webp" },
    { id: 13, name: "Opal Charm", price: 400.00, img: "watch/w13.webp" },
    { id: 14, name: "Stella Timepiece", price: 600.00, img: "watch/w14.jpg" },
    { id: 15, name: "Twilight Ticker", price: 699.99, img: "watch/w15.webp" },
    { id: 16, name: "Timeless Charm Collection", price: 400.00, img: "watch/w16.webp" },
    { id: 17, name: "Elegant Hours", price: 350.00, img: "watch/w17.jpeg" },
    { id: 18, name: "The Luxe Dial Series", price: 399.99, img: "watch/w118.jpg" },
    { id: 19, name: "Chic Ticks", price: 400.00, img: "watch/w19.webp" },
    { id: 26, name: "Moments in Style", price: 700.00, img: "watch/w20.webp" },
    { id: 20, name: "usk Dial", price: 300.00, img: "watch/w18.jpeg" },
    { id: 21, name: "Whisper Watch", price: 200.00, img: "watch/w21.jpg" },
    { id: 22, name: "Silva Luxe", price: 400.00, img: "watch/w22.jpg" },
    { id: 23, name: "Rosé Hour", price: 500.00, img: "watch/w23.webp" },
    { id: 24, name: "Luna Dial", price: 700.00, img: "watch/w24.jpeg" },
    { id: 25, name: "Elegant Hours", price: 800.00, img: "watch/w25.jpeg" }
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
  
