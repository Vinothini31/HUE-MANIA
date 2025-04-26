const products = [
    { id: 1, name: "maple leaf", price: 29.99, img: "necklace/1.jpg" },
    { id: 2, name: "glod flower", price: 59.99, img: "necklace/2.jpg" },
    { id: 3, name: "olive globe", price: 45.99, img: "necklace/3.jpg" },
    { id: 4, name: "sunflower", price: 15.99, img: "necklace/4.jpg" },
    { id: 5, name: "green clover", price: 24.99, img: "necklace/5.jpg" },
    { id: 6, name: "pink flower", price: 35.99, img: "necklace/6.jpg" },
    { id: 7, name: "moon", price: 15.99, img: "necklace/7.jpg" },
    { id: 8, name: "white flower", price: 19.99, img: "necklace/8.jpg" },
    { id: 9, name: "cherr", price: 13.99, img: "necklace/9.jpg" },
    { id: 10, name: "saphire star", price: 33.99, img: "necklace/10.jpg" },
    { id: 11, name: "jet black", price: 22.99, img: "necklace/11.jpg" },
    { id: 12, name: "droplet", price: 15.99, img: "necklace/12.jpg" },
    { id: 13, name: "sun", price: 25.99, img: "necklace/13.jpg" },
    { id: 14, name: "gem crystal", price: 9.99, img: "necklace/14.jpg" },
    { id: 15, name: "mermaid", price: 32.99, img: "necklace/15.jpg" },
    { id: 16, name: "electric blue", price: 10.99, img: "necklace/16.jpg" },
    { id: 17, name: "galaxy", price: 15.99, img: "necklace/17.jpg" },
    { id: 18, name: "rose quartz", price: 11.99, img: "necklace/18.jpg" },
    { id: 19, name: "lilly pad", price: 23.99, img: "necklace/19.jpg" },
    { id: 20, name: "lotus", price: 18.99, img: "necklace/20.jpg" }
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
  

  
