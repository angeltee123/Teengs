// Toggle Sidebar
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});

// Categories and Products
const categories = {
  electronics: [
    { name: "Smartphone", image: "images/smartphone.jpg" },
    { name: "Laptop", image: "images/laptop.jpg" },
    { name: "Headphones", image: "images/headphones.jpg" }
  ],
  toys: [
    { name: "Action Figure", image: "images/action-figure.jpg" },
    { name: "Toy Car", image: "images/toy-car.jpg" },
    { name: "Dollhouse", image: "images/dollhouse.jpg" }
  ],
  tools: [
    { name: "Hammer", image: "images/hammer.jpg" },
    { name: "Screwdriver", image: "images/screwdriver.jpg" },
    { name: "Wrench", image: "images/wrench.jpg" }
  ]
};

// Load Products
const productsContainer = document.getElementById('products');
const categoryLinks = document.querySelectorAll('#sidebar ul li a');

const loadProducts = (category) => {
  productsContainer.innerHTML = ''; // Clear previous products
  categories[category].forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
    `;
    productsContainer.appendChild(productDiv);
  });
};

// Add Event Listeners for Category Links
categoryLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = e.target.dataset.category;
    loadProducts(category);
  });
});

// Initial Load (Default Category)
loadProducts('electronics');
