const products = [
    { id: 1, name: "black sandal", price: 299.99, img: "sandals 1.jpg" },
    { id: 2, name: "casual sandal", price: 359.99, img: "sandals 2.jpg" },
    { id: 3, name: "flat belt", price: 415.99, img: "sandals 3.jpg" },
    { id: 4, name: "black high heel", price: 315.99, img: "sandals 4.jpg" },
    { id: 5, name: "high heel black", price: 165.99, img: "sandals 5.jpg" },
    { id: 6, name: "white flats", price: 205.99, img: "sandals 13.jpg" },
    { id: 7, name: "printed heel", price: 106.99, img: "sandals 14.jpg" },
    { id: 8, name: "fancy blue heel", price: 172.99, img: "sandals 15.jpg" },
    { id: 9, name: "casual sandals", price: 155.99, img: "sandals 16.jpg" },
    { id: 10, name: "royal blue high heels", price: 225.99, img: "sandals 17.jpg" },
    { id: 11, name: "pink sandals", price: 259.99, img: "sandals 22.jpg" },
    { id: 12, name: "mershell flats", price: 613.99, img: "sandals 23.jpg" },
    { id: 13, name: "cherr pink", price: 415.99, img: "sandals 24.jpg" },
    { id: 14, name: "unique rose", price: 167.99, img: "sandals 25.jpg" },
    { id: 15, name: "butterfly catch", price: 215.99, img: "sandals 26.jpg" },
    { id: 16, name: "fairy heels", price: 532, img: "sandals 27.jpg" },
    { id: 17, name: "pinky ribbon", price: 115.99, img: "sandals 28.jpg" },
    { id: 18, name: "apricot flats", price: 315.99, img: "sandals 19.jpg" },
    { id: 19, name: "daisy blue", price: 173.99, img: "sandals 21.jpg" },
    { id: 20, name: "knee tie", price: 215.99, img: "sandals 7.jpg" },
    { id: 20, name: "purple flats", price: 336.99, img: "sandals 29.jpg" },
    { id: 20, name: "high heel purple", price: 432.99, img: "sandals 30.jpg" },
    { id: 20, name: "flats", price: 398.99, img: "sandals 31.jpg" },
    { id: 20, name: "flowery", price: 567.99, img: "sandals 32.jpg" },
    { id: 20, name: "green sandals", price: 345.99, img: "sandals 33.jpg" }
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
  

 
  
