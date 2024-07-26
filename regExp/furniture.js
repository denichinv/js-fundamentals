function furniture(arr) {
  let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/;

  let totalPrice = 0;
  let items = [];
  let command = arr.shift();
  console.log("Bought furniture:");

  while (command !== "Purchase") {
    let match = command.match(pattern);

    if (match) {
      let { product, price, qty } = match.groups;
      items.push(product);
      let furniturePrice = Number(price) * Number(qty);
      totalPrice += furniturePrice;
    }

    command = arr.shift();
  }

  for (const item of items) {
    console.log(item);
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
