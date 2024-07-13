function solve(arr) {
  let map = new Map();

  for (const row of arr) {
    let [product, qty] = row.split(" ");
    qty = Number(qty);

    if (!map.has(product)) {
      map.set(product, qty);
    } else {
      let currQty = map.get(product);
      let newQty = currQty + qty;

      map.set(product, newQty);
    }
  }

  for (const row of map) {
    console.log(`${row[0]} -> ${row[1]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
