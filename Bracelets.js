
const products = [
    { id: 1, name: "The Charm Garden", price: 500.99, img: "bracelets/p1.jpg" },
    { id: 2, name: "TwinkleTales Bracelets", price: 600.99, img: "bracelets/p2.jpg" },
    { id: 3, name: "Nature's Loop", price: 700.99, img: "bracelets/p3.jpg" },
    { id: 4, name: "AuraBinds", price: 1000.00, img: "bracelets/p4.jpg" },
    { id: 5, name: "Wrist Whispers", price: 250.99, img: "bracelets/p5.jpg" },
    { id: 6, name: "Petal & Shine", price: 350.99, img: "bracelets/p6.jpg" },
    { id: 7, name: "LunaLuxe Bracelets", price: 150.99, img: "bracelets/p7.jpg" },
    { id: 8, name: "Enchanted Wraps", price: 1000.99, img: "bracelets/p8.jpg" },
    { id: 9, name: "FloraGleam Collection", price: 750.000, img: "bracelets/p9.jpg" },
    { id: 10, name: "The Bloom Band Boutique", price: 33.99, img: "bracelets/p10.jpg" },
    { id: 11, name: "AuraBinds", price: 229.99, img: "bracelets/p11.jpg" },
    { id: 12, name: "Petal & Shine", price: 159.99, img: "bracelets/p12.jpg" },
    { id: 13, name: "Petal & Shine", price: 254.99, img: "bracelets/p13.jpg" },
    { id: 14, name: "gem crystal", price: 900.00, img: "bracelets/p14.jpg" }
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
  

  
