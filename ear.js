const products = [
    { id: 1, name: "gold twin drop", price: 29.99, img: "earings/111.jpg" },
    { id: 2, name: "white gem hoops", price: 59.99, img: "earings/112.jpg" },
    { id: 3, name: "pink diamond", price: 45.99, img: "earings/113.jpg" },
    { id: 4, name: "black rect dangles", price: 15.99, img: "earings/114.jpg" },
    { id: 5, name: "white rect dangles", price: 15.99, img: "earings/115.jpg" },
    { id: 6, name: "black tri", price: 20.99, img: "earings/116.jpg" },
    { id: 7, name: "red dots", price: 10.99, img: "earings/117.jpg" },
    { id: 8, name: "silver loops", price: 17.99, img: "earings/118.jpg" },
    { id: 9, name: "emerald stud", price: 15.99, img: "earings/119.jpg" },
    { id: 10, name: "olive flower", price: 5.99, img: "earings/120.jpg" },
    { id: 11, name: "crstal", price: 25.99, img: "earings/121.jpg" },
    { id: 12, name: "mershell", price: 13.99, img: "earings/122.jpg" },
    { id: 13, name: "cherr", price: 15.99, img: "earings/123.jpg" },
    { id: 14, name: "black rose", price: 17.99, img: "earings/124.jpg" },
    { id: 15, name: "butterfly", price: 15.99, img: "earings/125.jpg" },
    { id: 16, name: "fairy", price: 32, img: "earings/126.jpg" },
    { id: 17, name: "blue ribbon", price: 15.99, img: "earings/127.jpg" },
    { id: 18, name: "apricot loops", price: 15.99, img: "earings/128.jpg" },
    { id: 19, name: "daisy", price: 13.99, img: "earings/129.jpg" },
    { id: 20, name: "kuromi", price: 15.99, img: "earings/130.jpg" }
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
  


  
