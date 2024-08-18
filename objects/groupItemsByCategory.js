function groupItemsByCategory(products) {
  let productsByCategory = {};

  for (const product of products) {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  }

  for (const category in productsByCategory) {
    productsByCategory[category].sort((a, b) => b.price - a.price);
  }

  return productsByCategory;
}

const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Running Shoes", price: 79.99, category: "Sports" },
  { id: 3, name: "Smartphone", price: 699.99, category: "Electronics" },
  { id: 4, name: "Tennis Racket", price: 189.99, category: "Sports" },
  { id: 5, name: "T-shirt", price: 19.99, category: "Clothing" },
  { id: 6, name: "Headphones", price: 199.99, category: "Electronics" },
  { id: 7, name: "Jeans", price: 59.99, category: "Clothing" },
];

console.log(groupItemsByCategory(products));
