function catalogue(arr) {
  let products = {};

  for (const entry of arr) {
    let [name, price] = entry.split(" : ");
    price = Number(price);
    products[name] = price;
  }

  let sortedNames = Object.keys(products).sort((a, b) => a.localeCompare(b));

  let currentGroup = "";
  for (const name of sortedNames) {
    let group = name[0];
    if (group !== currentGroup) {
      currentGroup = group;
      console.log(group);
    }
    console.log(`  ${name}: ${products[name]}`);
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
