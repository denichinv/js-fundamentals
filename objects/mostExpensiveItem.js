function findMostExpensiveItem(items) {
  if (items.length === 0) return null;

  let mostExpensiveItem = items[0];

  for (const item of items) {
    if (item.price > mostExpensiveItem.price) {
      mostExpensiveItem = item;
    }
  }

  return mostExpensiveItem.name;
}

const items = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Smartphone", price: 699.99, category: "Electronics" },
  { name: "Designer Handbag", price: 1500.0, category: "Fashion" },
  { name: "Running Shoes", price: 129.99, category: "Sports" },
  { name: "Coffee Maker", price: 89.99, category: "Home Appliances" },
  { name: "Gold Necklace", price: 799.99, category: "Jewelry" },
];

console.log(findMostExpensiveItem(items));
