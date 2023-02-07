function getRandomProductIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `assets/${productNames[i]}.jpeg`);
}

// render our products onto the page
function renderProducts() {
  // get three random product indexes
  let product1 = getRandomProductIndex();
  let product2 = getRandomProductIndex();
  let product3 = getRandomProductIndex();

  // check none of them match
  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product2 = getRandomProductIndex();
    product3 = getRandomProductIndex();
  }

  // put those images onto the page
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  img1.src = Product.allProducts[product1].src;
  img1.alt = Product.allProducts[product1].name;

  img2.src = Product.allProducts[product2].src;
  img2.alt = Product.allProducts[product2].name;

  img3.src = Product.allProducts[product3].src;
  img3.alt = Product.allProducts[product3].name;
}
renderProducts();
