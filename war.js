
window.products = [
    { id: 1, name: "beige trench coat", price: 29.99, img: "dress/1.PNG" },
    { id: 2, name: "cargos", price: 59.99, img: "dress/2.PNG" },
    { id: 3, name: "black hoodie", price: 45.99, img: "dress/3.PNG" },
    { id: 4, name: "turtle neck sweatshirt", price: 15.99, img: "dress/5.PNG" },
    { id: 5, name: "jean top", price: 15.99, img: "dress/4.PNG" },
    { id: 6, name: "beige skirt", price: 20.99, img: "dress/6.PNG" },
    { id: 7, name: "jean skirt", price: 10.99, img: "dress/7.PNG" },
    { id: 8, name: "black boots", price: 17.99, img: "dress/8.PNG" },
    { id: 9, name: "white shoes", price: 15.99, img: "dress/9.PNG" },
    { id: 10, name: "black earing", price: 5.99, img: "dress/10.PNG" },
    { id: 11, name: "silver loop", price: 25.99, img: "dress/11.PNG" },
    { id: 12, name: "mixed handbag", price: 13.99, img: "dress/12.PNG" },
    { id: 13, name: "white handbag", price: 15.99, img: "dress/13.PNG" },
    { id: 14, name: "black handbag", price: 17.99, img: "dress/14.PNG" },
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
      `;
      container.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cartItems.push(product);
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
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
  