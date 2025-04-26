const products = [
    { id: 1, name: "big bow clips", price: 219.99, img: "3.avif" },
    { id: 2, name: "prong clip", price: 159.99, img: "2.jpg" },
    { id: 3, name: "rose petals", price: 145.99, img: "8.jpg" },
    { id: 4, name: "rose claw", price: 155.99, img: "9.jpg" },
    { id: 5, name: "ahoney pink clips", price: 124.99, img: "5.jpg" },
    { id: 6, name: "flower lock", price: 135.99, img: "6.jpg" },
    { id: 7, name: "blubby peacock", price: 115.99, img: "7.webp" },
    { id: 8, name: "yellow chimes", price: 119.99, img: "10.webp" },
    { id: 9, name: "blubby white", price: 113.99, img: "11.jpg" },
    { id: 10, name: "bakefy 3piece claw", price: 133.99, img: "12.jpg" },
    { id: 11, name: "dlassie trends pearl", price: 122.99, img: "13.webp" },
    { id: 12, name: "mizorri rhinestone", price: 115.99, img: "14.webp" },
    { id: 13, name: "palay", price: 125.99, img: "15.jpg" },
    { id: 14, name: "acrylic hairclip", price: 119.99, img: "1.webp" },
    { id: 15, name: "trendy club lily flower", price: 132.99, img: "16.webp" },
    { id: 16, name: "korean style blue metal", price: 110.99, img: "17.webp" },
    { id: 17, name: "samyak", price: 115.99, img: "20.webp" },
    { id: 18, name: "chotaliya", price: 111.99, img: "19.jpg" },
    { id: 19, name: "butterfly claws", price: 123.99, img: "18.jpg" },
    { id: 20, name: "banana clip", price: 118.99, img: "4.jpg" }
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
  
 
 
  
